---
layout: page
outline: false
footer: false
---

<div style="height: calc(100vh - 150px); border: none; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;">
    <img class="aboutIcon" src="/head&favicon.png" alt="图标"/>
    <div style="gap: px">
        <h1 class="aboutPageTitle">星轨旅行奇想社官网</h1>
        <p class="aboutPageSlogan"> ——与你一起去学习，与你去看高山大海，带你去吃世界美味</p>
        <br>
        <br>
        <p class="aboutPageText">版本：V6.0.0 | 2025/7/19</p>
    </div>
</div>

<style>
    .aboutPageText {
        font-size: 1.75rem;
        text-align: center;
    }

    .aboutPageTitle {
        font-size: 3.5rem;
        background: linear-gradient(to right, 
            #c273fc, 
            #4facfe
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        word-wrap: break-word;
        text-align: center;
        line-height: 1.2;  /* 调整行高，避免被截断 */
        margin: 0;  /* 取消默认的 margin */
    }
    /* 提示文本 */
    .aboutPageSlogan {
        font-size: 1.25rem;
        font-style: italic;
        font-weight: lighter;
        padding-left: 150px;
        line-height: 150%;
        color: #727272;
    }

    .aboutIcon {
        margin-bottom: 10px;
        width: 150px;
        height: 161px;
    }

    /* 响应式设计 */
    @media (max-width: 768px) {
        .aboutPageTitle {
            font-size: 3rem;
            padding: 0px 50px;
        }

        .aboutPageText {
            font-size: 1.5rem;
            margin: 10px 0 20px;
            padding: 0px 50px;
        }

        .aboutPageSlogan {
            padding-left: 50px;
            padding: 0px 50px;
        }

        .aboutIcon {
            width: 125px;
            height: 134px;
        }
    }

    @media (max-width: 480px) {
        .aboutPageTitle {
            font-size: 2rem;
            padding: 0px 50px;
        }

        .aboutPageSlogan {
            font-size: 0.8rem;
            padding-left: 0px;
            padding: 0px 50px;
        }
        .aboutIcon {
            width: 100px;
            height: 107px;
        }
    }
</style>
