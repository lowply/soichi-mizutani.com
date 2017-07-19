package main

import (
	"html/template"
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

type Page struct {
	Title    string
	Slag     string
	Category Category
}

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Renderer = &Template{
		templates: template.Must(template.ParseGlob("templates/*.tmpl")),
	}

	e.Pre(middleware.AddTrailingSlash())
	e.Static("/assets", "public/assets")

	g := e.Group("/")
	// g.Use(standard.WrapMiddleware(cors.Default().Handler))

	g.GET("", Index)
	g.GET("works/", NotFound)
	g.GET("works/:cat/", Works)
	g.GET("bio/", Bio)
	g.GET("company/", Company)
	g.GET("links/", Links)

	e.Logger.Fatal(e.Start(":9090"))
}

func NotFound(c echo.Context) error {
	return c.String(http.StatusNotFound, "404 Not Found")
}

func Index(c echo.Context) error {
	p := Page{
		Title: "Welcome",
		Slag:  "index",
	}
	return c.Render(http.StatusOK, "index", p)
}

func Bio(c echo.Context) error {
	p := Page{
		Title: "Biography",
		Slag:  "bio",
	}
	return c.Render(http.StatusOK, "bio", p)
}

func Company(c echo.Context) error {
	p := Page{
		Title: "Company",
		Slag:  "company",
	}
	return c.Render(http.StatusOK, "company", p)
}

func Links(c echo.Context) error {
	p := Page{
		Title: "Links",
		Slag:  "links",
	}
	return c.Render(http.StatusOK, "links", p)
}

func Works(c echo.Context) error {
	p := Page{
		Title:    "Works",
		Slag:     "works",
		Category: readCategory(c.Param("cat")),
	}
	return c.Render(http.StatusOK, "work", p)
}
