// ==UserScript==
// @name         MWI Shortcut keys
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  MWI Shortcut keys
// @author       Jayden
// @match        https://www.milkywayidle.com/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    function clickButtonInXPathWithText(xpath,text) {
        // 配置参数
        const config = {
            parentXPath: xpath,
            targetText: text
        };

        // Step 1: 定位父级容器
        const parentNode = document.evaluate(
            config.parentXPath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;

        if (!parentNode) {
            console.warn("父级容器未找到");
            return;
        }

        // Step 2: 在父级容器下查找按钮
        const buttons = parentNode.getElementsByTagName('button');
        for (const btn of buttons) {
            if (btn.textContent.trim() === config.targetText) {
                btn.click();
                console.log("在指定容器内成功点击按钮");
                return;
            }
        };
        console.warn("在指定路径下未找到目标按钮");
    };

    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'e' && !event.ctrlKey && !event.altKey) {
            event.preventDefault();
            Enhance();
        };
        if (event.key.toLowerCase() === 'a' && !event.ctrlKey && !event.altKey) {
            event.preventDefault();
            Alchemize();
        };
        if (event.key.toLowerCase() === 'm' && !event.ctrlKey && !event.altKey) {
            event.preventDefault();
            Marketplace();
        };
        if (event.key.toLowerCase() === 'd' && !event.ctrlKey && !event.altKey) {
            event.preventDefault();
            Dictionary();
        };
        if (event.key.toLowerCase() === 'v' && !event.ctrlKey && !event.altKey) {
            event.preventDefault();
            ViewAllItems();
        };
        if (event.key.toLowerCase() === 's' && !event.ctrlKey && !event.altKey) {
            event.preventDefault();
            Sell();
        };
        if (event.key === 'Escape') {
            ESC();
    }
    });

    function Enhance() {
        const xpath = "/html/body/div[3]/div/div";
        const text = "强化";
        clickButtonInXPathWithText(xpath,text)
    };

    function Alchemize() {
        const xpath = "/html/body/div[3]/div/div";
        const text = "炼金";
        clickButtonInXPathWithText(xpath,text)
    };

    function Marketplace() {
        const xpath = "/html/body/div[3]/div/div";
        const text = "前往市场";
        clickButtonInXPathWithText(xpath,text)
    };

    function Dictionary() {
        const xpath = "/html/body/div[3]/div/div";
        const text = "打开物品词典";
        clickButtonInXPathWithText(xpath,text)
    };

    function ViewAllItems() {
        const xpath = "/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[2]/div[1]/div/div[2]";
        const text = "查看所有物品";
        clickButtonInXPathWithText(xpath,text)
    };

    function Sell() {
        const xpath = "/html/body/div[3]/div/div";
        const text = "前往市场";
        clickButtonInXPathWithText(xpath,text)

        const xpath2 = "/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[2]/div[1]/div/div[4]/div[1]";
        const text2 = "+ 新出售挂牌";
        setTimeout(() => {
            clickButtonInXPathWithText(xpath2,text2)
        }, 200);
    };

    function ESC() {
        const closeButtons = document.querySelectorAll('[class*="close"]');
        for (const btn of closeButtons) {
            console.log(btn)
            btn.click();
            }
    }

})();