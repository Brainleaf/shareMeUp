# shareMeUp (v0.9.1-alpha)
ShareMeUp is an open source widget for social networks page sharing

## WARNING
This plugin is under develope, so don't use it at now!

## jQuery Plugin
ShareMeUp share widgets are based on **jquery.sharemeup.js** jQuery plugin.<br>
Here it's possible to finde some documentation about plugin usage. If you need documentation about widget usage, please see the official page [http://brainleaf.github.io/shareMeUp.](http://brainleaf.github.io/shareMeUp.)


***

## Install

### Manual Installation
In order to manually install the plugin, simply follow the following instructions:

1. Include ShareMeUp css file
```html
<link rel="stylesheet" href="plugin/path/css/sharemeup.min.css">
```
2. Include jQuery and ShareMeUp plugin javascript files
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
<link href="https://brainleaf.github.io/shareMeUp/cdn/alpha/latest/css/sharemeup.min.css">
<script src="https://brainleaf.github.io/shareMeUp/cdn/alpha/latest/js/jquery.sharemeup.min.js"></script>
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

## Usage
In order to use our plugin you simply need to initialize plugin in this way
```javascript
$('.elementClass').shareMeUp();
```

When plugin is initialized you can use the following markup to obtain a social share button
```html
<div class="elementClass" data-social="facebook"></div>
```
You can use the **data-social** attribute to specify the social network you want.


***


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

**Version 0.9.1**
* Some bugs fixed

**Version 0.9.0**
* Two new icon styles added: _rounded_ and _hexagon_ 

**Version 0.8.2**
* Some javascript updates

**Version 0.8.1**
* First Update
