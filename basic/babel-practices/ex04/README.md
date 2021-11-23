## Env Preset about babel
1.  관련 플러인들을 모아 놓고 한 번에 적용하기 위해서 미리 플러그인들을 모아 놓은 것
2.  ECMAScript 년도별로 모아 놓은 것들, stage(0, 1, 2, 3) 레벨별로 모아 놓은 프리셋, 3rd party 프리셋(typescript, react)등 종류가 다양하다.
3.  Env Preset은 stage 3 레벨 이상되는 문법의 플러그인들을 설치한다.
4.  Env Preset 뿐만 아니라 다양하고 편리하게 설치되는 플러그인들을 babel을 통해 설정할 수 있다.(babel.config.json)

.. 문법 level 말고도 브라우져 별로 따질수 있다.
## Env Preset 설치
1. Env Preset 설치
    ```bash
    $ npm i -D @babel/core @babel/preset-env @babel/cli 
    ```
    
2. Env Preset 플러그인 항목 확인
    ```bash
    $ npm list --depth=1 | grep "@babel/plugin"
    ```

## 설정 및 변환
1.  기본 설정[babel.config.01.json]

    -   설정
        ```json
        {
            "presets": [
                ["@babel/preset-env", {
                    "targets": {
                        "node": "current"
                    }
                }]
            ]
        }    
        ```

    -   변환
        ```bash
        $ npx babel src/ex01.js -o dist/ex01.ex01.js
        ```

2.  플러그인 설정[babel.config.02.json]

    -   설정
        ```json
        {
            "presets": [
                ["@babel/preset-env", {
                    "targets": {
                        "node": "current"
                    }
                }]
            ],
            "plugins": [
                "@babel/plugin-transform-block-scoping",
                "@babel/plugin-transform-parameters",
                "@babel/plugin-transform-template-literals",
                "@babel/plugin-transform-for-of"
            ]
        }    
        ```

    -   변환
        ```bash
        $ npx babel src/ex01.js -o dist/ex01.03.js
        ```


3.  브라우저 타켓 설정[babel.config.json]
    [브라우저별 ES6호환 테이블](https://kangax.github.io/compat-table/es6/) 참고해서 설정한다.

    -   설정
        ```json
        {
            "presets": [
                ["@babel/preset-env", {
                    "targets": {
                        "ie": "11",
                        "edge": "89",
                        "firefox": "92",
                        "chrome": "90",
                        "opera": "76",
                        "safari": "15"
                    }
                }]
            ]
        }    
        ```

    -   변환
        ```bash
        $ npx babel src/ex01.js -o dist/ex01.03.js
        ```

