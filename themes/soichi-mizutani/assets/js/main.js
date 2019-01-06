class WorkNav {
	constructor() {
		const container = $("body#works article");
		const list = $("> nav ul li a", container);
		list.each((i, e) => {
			const cat_name = $(e).attr("href");
			const url = `url(/assets/img${cat_name}/1.jpg)`;
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

class Work {
	constructor() {
		const container = $("body#works article section#work");
		const category = container.parent().attr("id");
		const name = container.attr("class");

		this.innerWidth = 700;
		this.navItems = $("> nav ul li a", container);
		this.photoBox = $("> div ul", container);
		this.photos = $("> div ul li a", container);
		this.photosNum = $("> div ul li", container).length;

		this.navItems.each((i, e) => {
			let url = `url(/assets/img/works/${category}/${name}/${i + 1}.jpg)`;
			$(e).css("background-image", url);
		});

		this.wn = new WorkNav();

		this.navItems.on("click", e => {
			let id = parseInt($(e.currentTarget).attr("id"));
			this.activateThumbnail(id);
			e.preventDefault();
		});

		this.photos.on("click", e => {
			let id = parseInt($(e.currentTarget).attr("id"));
			if (id == this.photosNum) {
				id = 0;
			}
			this.activateThumbnail(id, true);
			e.preventDefault();
		});

		this.activateThumbnail(1);
	}
	activateThumbnail(i, next = false) {
		if (window.innerWidth < 992) {
			return false;
		}
		if (next) {
			i = i + 1;
		}
		let j = i - 1;
		this.navItems.removeClass("active");
		$(this.navItems[j]).addClass("active");
		this.movePhotoBox(i);
	}
	movePhotoBox(x) {
		const amount = -1 * this.innerWidth * (x - 1);
		this.photoBox.css("transform", `translateX(${amount}px)`);
	}
}

class Bio {
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

switch ($("body").attr("id")) {
	case "works":
		w = new Work();
		break;
	case "bio":
		bio = new Bio();
		break;
}
