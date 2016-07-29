package main

import (
	"html/template"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

var e = createMux()

func prepMux() *echo.Echo {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.SetRenderer(t)
	e.Pre(middleware.AddTrailingSlash())
	e.Static("/assets", "public/assets")

	return e
}

var t = &Template{
	templates: template.Must(template.ParseGlob("templates/*.tmpl")),
}
