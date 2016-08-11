package main

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/engine/standard"
	"github.com/rs/cors"
)

type Page struct {
	Title    string
	Slag     string
	Category Category
}

func init() {
	g := e.Group("/")
	g.Use(standard.WrapMiddleware(cors.Default().Handler))

	g.Get("", Index)
	g.Get("works/", NotFound)
	g.Get("works/:cat/", Works)
	g.Get("bio/", Bio)
	g.Get("company/", Company)
	g.Get("links/", Links)
}

func NotFound(c echo.Context) error {
	return c.String(http.StatusNotFound, "404 Not Found")
}

func Index(c echo.Context) error {
	p := Page{
		Title: "Welcome",
		Slag:  "index",
	}
	c.Response().Header().Add("Cache-Control", "max-age=86400, public")
	return c.Render(http.StatusOK, "index", p)
}

func Bio(c echo.Context) error {
	p := Page{
		Title: "Biography",
		Slag:  "bio",
	}
	c.Response().Header().Add("Cache-Control", "max-age=86400, public")
	return c.Render(http.StatusOK, "bio", p)
}

func Company(c echo.Context) error {
	p := Page{
		Title: "Company",
		Slag:  "company",
	}
	c.Response().Header().Add("Cache-Control", "max-age=86400, public")
	return c.Render(http.StatusOK, "company", p)
}

func Links(c echo.Context) error {
	p := Page{
		Title: "Links",
		Slag:  "links",
	}
	c.Response().Header().Add("Cache-Control", "max-age=86400, public")
	return c.Render(http.StatusOK, "links", p)
}

func Works(c echo.Context) error {
	p := Page{
		Title:    "Works",
		Slag:     "works",
		Category: readCategory(c.Param("cat")),
	}
	c.Response().Header().Add("Cache-Control", "max-age=86400, public")
	return c.Render(http.StatusOK, "work", p)
}
