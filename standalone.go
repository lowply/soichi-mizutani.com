// +build !appengine,!appenginevm

package main

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/engine/standard"
)

func createMux() *echo.Echo {
	e := prepMux()
	return e
}

func main() {
	e.Run(standard.New(":9090"))
}
