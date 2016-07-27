package main

import (
	"html/template"
	"io"
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/engine/standard"
	"github.com/labstack/echo/middleware"
)

type Page struct {
	Title    string
	Slag     string
	Category Category
}

type Template struct {
	templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
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

func WorksCategory(c echo.Context) error {
	p := Page{
		Title:    "Works",
		Slag:     "works",
		Category: readCategory(c.Param("cat")),
	}
	return c.Render(http.StatusOK, "work", p)
}

func main() {
	t := &Template{
		templates: template.Must(template.ParseGlob("templates/*.tmpl")),
	}

	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Pre(middleware.AddTrailingSlash())
	e.SetRenderer(t)
	e.Static("/assets", "public/assets")
	e.Get("/", Index)
	e.Get("/works/", NotFound)
	e.Get("/works/:cat/", WorksCategory)
	e.Get("/bio/", Bio)
	e.Get("/company/", Company)
	e.Get("/links/", Links)
	e.Run(standard.New(":9090"))
}
