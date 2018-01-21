package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"strconv"
	"strings"
)

const (
	jsondata string = "./public/assets/data.json"
)

type Data struct {
	Categories []Category `json:"Category"`
}

type Category struct {
	Name  string `json:"Name"`
	Title string `json:"Title"`
	Works []Work `json:"Works"`
}

type Work struct {
	Ename string `json:"Ename"`
	Jname string `json:"Jname"`
	Dir   string `json:"Dir"`
	Jpg   []int
}

func parseJson(c Data, filename string) (Data, error) {
	file, err := ioutil.ReadFile(filename)
	if err != nil {
		log.Fatal(err)
	}

	err = json.Unmarshal(file, &c)
	if err != nil {
		log.Fatal(err)
	}
	return c, err
}

func readCategory(name string) Category {
	d := Data{}
	data, err := parseJson(d, jsondata)
	if err != nil {
		log.Fatal(err)
	}

	for _, category := range data.Categories {
		if category.Name == name {
			return category
		}
	}
	return Category{}
}

func pickWork(cat string, name string) Work {
	d := Data{}
	data, err := parseJson(d, jsondata)
	if err != nil {
		log.Fatal(err)
	}

	for _, category := range data.Categories {
		if category.Name == cat {
			for _, work := range category.Works {
				if work.Dir == name {
					location := "./public/assets/img/works/" + category.Name + "/" + work.Dir
					files, _ := ioutil.ReadDir(location)
					for _, f := range files {
						if strings.Contains(f.Name(), ".jpg") {
							num, err := strconv.Atoi(strings.Replace(f.Name(), ".jpg", "", -1))
							if err != nil {
								log.Fatal(err)
							}
							work.Jpg = append(work.Jpg, num)
						}
					}
					return work
				}
			}
		}
	}
	return Work{}
}
