package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"strconv"
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
	Ename    string `json:"Ename"`
	Jname    string `json:"Jname"`
	Dir      string `json:"Dir"`
	Caption  string `json:"Caption"`
	Jpg      int    `json:"Jpg"`
	JpgSlice []string
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

func createJpgSlice(num int) []string {
	slice := []string{}
	for i := 1; i <= num; i++ {
		si := strconv.Itoa(i)
		slice = append(slice, si)
	}
	return slice
}

func addJpgSlice(c Category) Category {
	for i, work := range c.Works {
		slice := createJpgSlice(work.Jpg)
		c.Works[i].JpgSlice = slice
	}
	return c
}

func readCategory(name string) Category {
	d := Data{}
	data, err := parseJson(d, jsondata)
	if err != nil {
		log.Fatal(err)
	}

	for _, category := range data.Categories {
		if category.Name == name {
			c := addJpgSlice(category)
			return c
		}
	}
	return Category{}
}
