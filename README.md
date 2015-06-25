# shareMeUp (v0.11.1-beta)
ShareMeUp is an open source widget for social networks page sharing

## jQuery Plugin
ShareMeUp share widgets are based on **jquery.sharemeup.js** jQuery plugin.<br>
Here it's possible to finde some documentation about plugin usage. If you need documentation about widget usage, please see more at the official page [http://brainleaf.github.io/shareMeUp](http://brainleaf.github.io/shareMeUp)


***


## Plugin dir structure

The basic structure of the project is given in the following way:

```
├── demo/
│   ├── demo.css
│   ├── demo.less
│   └── demo.html
│   
├── dist/
│   ├── css/
│   │     ├── sharemeup.css
│   │     ├── sharemeup.min.css
│   │     └── sharemeup.less
│   ├── js/
│   │     ├── jquery.sharemeup.js
│   │     ├── jquery.sharemeup.min.js
│   │     └── sharemeup.js
│   └── img/
│         └── sharemeup/
│               ├── default/ ... [all style icons]
│               ├── hexagon/ ... [all style icons]
│               └── rounded/ ... [all style icons]
├── bower.json
├── LICENSE
└── README.md
```

***

## INSTALLATION

### Manual Installation
In order to manually install the plugin, simply follow the following instructions:

1 - Include ShareMeUp css file
```html
<link rel="stylesheet" href="plugin/path/css/sharemeup.min.css">
```
2 - Include jQuery and ShareMeUp plugin javascript files
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="plugin/path/js/jquery.sharemeup.min.js"></script>
```

### Install from CDN
ShareMeUp requires jQuery Library, so if you don't have it already loaded, include it in your page:
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
```
Then include plugin **css** and **javascript** files:
```html
<link href="https://brainleaf.github.io/shareMeUp/cdn/v0/beta/css/sharemeup.min.css">
<script src="https://brainleaf.github.io/shareMeUp/cdn/v0/beta/js/jquery.sharemeup.min.js"></script>
```

##### CDN updates
CDN will be updated only with the latest main stable version.<br>
Each main version will have his cdn link, so you will recive only updates only for the main version you are using.<br>
**Subscribe our newsletter to stay updated about new releases and updates.**

[Click Here](http://brainleaf.us11.list-manage1.com/subscribe?u=2864a1cf3439d74a57ade24aa&id=a642762ab3) to subscribe our newsletter


### Install from Bower
```
$ bower install sharemeup --save-dev
```

***

## USAGE
In order to use our plugin you simply need to initialize plugin in this way
```javascript
$('.elementClass').shareMeUp();
```

When plugin is initialized you can use the following markup to obtain a social share button
```html
<span class="elementClass" data-social="facebook"></span>
```
You can use the **data-social** attribute to specify the social network you want.

#### Available Social Networks
Use the following names in **data-social=""** attribute to load the relative social networks share link:<br>
*facebook, twitter, google_plus, linkedin, pinterest, reddit, stumbleupon, delicious*

### Buttons Group
ShareMeUp provides a faster way to load a buttons group instead single buttons.<br>
You can do this simply adding some data attributes:
```html
<div class="elementClass" data-group="true" data-social="facebook,twitter,linkedin,google_plus"></div>
```


***

## PLUGIN OPTIONS

As a common jQuery plugin, ShareMeUp provides some options to customize plugin usage.<br>
There are some available icons styles and sizes and it's possible to customize icons image folder path, to let you place icons where you want inside your site file tree.<br>
The following table explains all plugin options, kinds and accepted values.

| Option Name  | Type  | Accepted Values | Default | Desc |
| --------------- |--------------- | --------------- | --------------- | --------------- |
| **style** | [STRING] | "default", "rounded", "hexagon" | "default" | *This is the icon style* |
| **size** | [STRING] | "small", "medium", "large" | "medium" | *This is the icon size* |
| **imgPath** | [STRING] | any string as folder path | "img/sharemeup/" | *This is the icon directory path. Path must be relative to the page where plugin is used* |

#### Styles

| Default  | Hexagon  | Rounded |
| :---------------: |:---------------:| :---------------:|
| <img src="https://github.com/Brainleaf/shareMeUp/blob/master/dist/img/sharemeup/default/btn_default_linkedin_large.png">      | <img src="https://github.com/Brainleaf/shareMeUp/blob/master/dist/img/sharemeup/hexagon/btn_hexagon_linkedin_large.png"> | <img src="https://github.com/Brainleaf/shareMeUp/blob/master/dist/img/sharemeup/rounded/btn_rounded_linkedin_large.png"> |

#### Sizes

| Small  | Medium  | Large |
| :---------------: |:---------------:| :---------------:|
| 15px    | 30px |  40px |


***


#### History

**Version 0.11.1 beta**
* Bug fixed on "Delicious" button

**Version 0.11.0 beta**
* Reddit button added
* StumbleUpon button added
* Delicious button added

**Version 0.10.0 beta**
* New buttons group feature added
* New data-custom="" attribute added
* Some code changes

**Version 0.9.2 beta**
* Some bugs fixed
* CDN version updated

**Version 0.9.1 alpha**
* Some bugs fixed

**Version 0.9.0 alpha**
* Two new icon styles added: _rounded_ and _hexagon_ 

**Version 0.8.2 alpha**
* Some javascript updates

**Version 0.8.1 alpha**
* First Update
