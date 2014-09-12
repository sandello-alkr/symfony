/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.addTemplates(
	"default",
	{
		imagesPath:CKEDITOR.getUrl(CKEDITOR.plugins.getPath("templates")+"templates/images/"),
		templates:[
			{
				title:"1-1",
				image:"template2.gif",
				description:"A title with some text and a table.",
				html:'<div class="row"><div class="col-md-6"><p>Текст</p></div><div class="col-md-6"><p>Текст</p></div></div>'
			},
			{
				title:"1-2",
				image:"template2.gif",
				description:"A title with some text and a table.",
				html:'<div class="row"><div class="col-md-4"><p>Текст</p></div><div class="col-md-8"><p>Текст</p></div></div>'
			},
			{
				title:"2-1",
				image:"template2.gif",
				description:"A title with some text and a table.",
				html:'<div class="row"><div class="col-md-8"><p>Текст</p></div><div class="col-md-4"><p>Текст</p></div></div>'
			},
			{
				title:"3-1",
				image:"template2.gif",
				description:"A title with some text and a table.",
				html:'<div class="row"><div class="col-md-3"><p>Текст</p></div><div class="col-md-9"><p>Текст</p></div></div>'
			},
			{
				title:"1-3",
				image:"template2.gif",
				description:"A title with some text and a table.",
				html:'<div class="row"><div class="col-md-9"><p>Текст</p></div><div class="col-md-3"><p>Текст</p></div></div>'
			},
			{
				title:"1-1-1",
				image:"template2.gif",
				description:"A title with some text and a table.",
				html:'<div class="row"><div class="col-md-4"><p>Текст</p></div><div class="col-md-4"><p>Текст</p></div><div class="col-md-4"><p>Текст</p></div></div>'
			},			
			{
				title:"галерея - табл",
				image:"template2.gif",
				description:"A title with some text and a table.",
				html:'<table class="image-tab"><tr><td><img src="/bundles/extendcms/img/animal.jpg"></td><td><img src="/bundles/extendcms/img/animal.jpg"></td><td><img src="/bundles/extendcms/img/animal.jpg"></td></tr><tr><td>text</td><td>text</td><td>text</td></tr><tr><td><img src="/bundles/extendcms/img/animal.jpg"></td><td><img src="/bundles/extendcms/img/animal.jpg"></td><td><img src="/bundles/extendcms/img/animal.jpg"></td></tr><tr><td>text</td><td>text</td><td>text</td></tr><tr><td><img src="/bundles/extendcms/img/animal.jpg"></td><td><img src="/bundles/extendcms/img/animal.jpg"></td><td><img src="/bundles/extendcms/img/animal.jpg"></td></tr><tr><td>text</td><td>text</td><td>text</td></tr><tr><td><img src="/bundles/extendcms/img/animal.jpg"></td><td><img src="/bundles/extendcms/img/animal.jpg"></td><td><img src="/bundles/extendcms/img/animal.jpg"></td></tr><tr><td>text</td><td>text</td><td>text</td></tr></table>'			 
			},
			{
				title:"контакты",
				image:"template2.gif",
				description:"A title with some text and a table.",
				html:'<div class="row"><div class="col-md-6"><div class="row"><div class="col-md-5"><p><img alt="" src="/bundles/extendcms/img/sk.jpg"  />Бывает так, что наша компания знает как.</p></div><div class="col-md-6">Несмотря на сайтах и даже. Даже с языками, использующими латинский алфавит. Встречаются с разной частотой, имеется разница в книгопечатании еще в длине наиболее.Несмотря на сайтах и даже. Даже с языками, использующими латинский алфавит. Встречаются с разной частотой, имеется разница в книгопечатании еще в длине наиболее.</div></div></div><div class="col-md-6"><div class="row"><div class="col-md-5"><p><img alt="" src="/bundles/extendcms/img/sk.jpg" />Бывает так, что наша компания знает как.</p></div><div class="col-md-6">Несмотря на сайтах и даже. Даже с языками, использующими латинский алфавит. Встречаются с разной частотой, имеется разница в книгопечатании еще в длине наиболее.Несмотря на сайтах и даже. Даже с языками, использующими латинский алфавит. Встречаются с разной частотой, имеется разница в книгопечатании еще в длине наиболее.</div></div></div></div>'			 
			}

		]
	}
);

// <div class="row">
// 	<div class="col-md-6">
// 		<div class="row">
// 			<div class="col-md-5">
// 				<p><img alt="" src="http://lazorevka.wide-web.int/uploads/files/10213488.jpg" style="width: 180px; height: 225px;" />Бывает так, что наша компания знает как.</p>
// 			</div>
// 			<div class="col-md-6">
// 				Несмотря на сайтах и даже. Даже с языками, использующими латинский алфавит. Встречаются с разной частотой, имеется разница в книгопечатании еще в длине наиболее.Несмотря на сайтах и даже. Даже с языками, использующими латинский алфавит. Встречаются с разной частотой, имеется разница в книгопечатании еще в длине наиболее.
// 			</div>
// 		</div>
// 	</div>

// 	<div class="col-md-6">
// 		<div class="row">
// 			<div class="col-md-5">
// 				<p><img alt="" src="http://lazorevka.wide-web.int/uploads/files/10213488.jpg" style="width: 180px; height: 225px;" />Бывает так, что наша компания знает как.</p>
// 			</div>
// 			<div class="col-md-6">
// 				Несмотря на сайтах и даже. Даже с языками, использующими латинский алфавит. Встречаются с разной частотой, имеется разница в книгопечатании еще в длине наиболее.Несмотря на сайтах и даже. Даже с языками, использующими латинский алфавит. Встречаются с разной частотой, имеется разница в книгопечатании еще в длине наиболее.
// 			</div>
// 		</div>
// 	</div>
// </div>