# New Project Template version 1

## This template utilizes the following packages:

### NPM (devDependencies)
- grunt: 1.0.1
- grunt-contrib-uglify: 3.0.1
- grunt-contrib-watch: 1.0.0
- grunt-sass: 2.0.0
- load-grunt-tasks: 3.5.2

### NPM (dependencies)
- jquery: 3.2.1

### Bower (devDependencies)
- bourbon: 4.3.4
- susy: 2.2.12
- normalize-css: normalize.css 7.0.0

## Folder Structure

- project-v1

    * index.html
    * dist
        * css
            * styles.css    
        * js
            * scripts.js
    * src
        * sass
            * index.sass (@import all partials)
                * _base.sass
                * _layout.sass
                * _modules.sass (@import module partials )
                * _state.sass
                * _utils.scss
                * _vars.scss
                * modules (folder)
                    * _nav.sass
                    * _footer.sass
                    * _hero.sass
                    * _card.sass
                    * etc..




#### _base.sass
 * @import normalize or any other css resets
 * any additional default styles + layout styles like grid, flex, floats

#### _layout.sass
 * @import modules

#### _modules.sass
 * @import all module partials

#### _state.sass
Styles for elements in a certain state (hover, selected,) --is-selected 

#### _utils.scss

#### _vars.scss


Use #ID Selectors on large modules like header, main, footer, or sidebar sections (major elements of the page)   

unordered lists should be have not styling by default, so override normalize opt in rather than opt out

&--label (flat nested specificity)
