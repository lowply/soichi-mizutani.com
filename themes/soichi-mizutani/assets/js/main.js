class WorkNav {
	constructor() {
		const container = $("body#works article");
		const slug = container.attr("id");
		const list = $("> nav ul li a", container);
		list.each((i, e) => {
			const name = $(e).attr("href");
			const url = `url(/assets/img/${name}1.jpg)`;
			const h2 = $("> h2 span", container);
			$(e).css("background-image", url);
			$(e).on({
				mouseenter: e => {
					const ename = $(e.currentTarget).html();
					h2.html(" / " + ename);
				},
				mouseleave: e => {
					h2.html("");
				}
			});
		});
	}
}

class About {
	constructor() {
		this.container = $("section#content");
		this.lang = "";
		this.langSwitcher = $("nav#lang a", this.container);
		this.content = $("> div", this.container);
		this.langSwitcher.on("click", e => {
			this.switch($(e.currentTarget).attr("id"));
			e.preventDefault();
		});
		this.switch("ja");
	}
	switch(lang) {
		if (lang != this.lang) {
			this.content.hide();
			this.langSwitcher.removeClass("active");
			$("div#" + lang, this.container).show();
			$("nav#lang a#" + lang, this.container).addClass("active");
		}
	}
}

$(function(){
	switch ($("body").attr("id")) {
		case "works":
		    new WorkNav();
			break;
		case "about":
			new About();
			break;
	}
})

