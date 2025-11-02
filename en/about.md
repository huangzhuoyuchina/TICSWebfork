---
layout: page
outline: false
footer: false
---

<div style="height: calc(100vh - 150px); border: none; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;">
    <img class="aboutIcon" src="/head&favicon.png" alt="图标"/>
    <div style="gap: px">
        <h1 class="aboutPageTitle">The Official Site of T.I.C.S</h1>
        <p class="aboutPageSlogan">——Learn alongside you, behold the grandeur of mountains and seas with you; <br>Savor the finest cuisines, revel in the world’s wonders with you.</p>
        <br>
        <br>
        <p class="aboutPageText">Version：V6.0.0 | 2025/7/19</p>
    </div>
</div>

<style>
    .aboutPageText {
        font-family: "about";
        font-size: 1.75rem;
        text-align: center;
    }

    .aboutPageTitle {
        font-size: 3.5rem;
        font-family: "about";
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
        font-size: 1.0rem;
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
