package main

import (
	"html/template"
	"io"

	"github.com/labstack/echo"
	"github.com/labstack/echo/engine/standard"
	"github.com/labstack/echo/middleware"
)

type Template struct {
	templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
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
	e.Get("/works/:cat/", Works)
	e.Get("/bio/", Bio)
	e.Get("/company/", Company)
	e.Get("/links/", Links)
	e.Run(standard.New(":9090"))
}
