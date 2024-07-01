<style>
    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color: lightcoral;
        font-family: Arial, sans-serif;
    }
    #gif-container {
        position: relative;
        width: 50%;
        height: auto;
    }
    #gif {
        display: block;
        width: 100%;
        height: auto;
    }
    #gif-text {
        position: absolute;
        top: -60px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(255, 255, 255, 0.8);
        padding: 10px;
        font-size: 18px;
        text-align: center;
        border-radius: 5px;
        font-weight: bold;
        display: none;
    }
    .button-container {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 1;
        margin-top: 20px;
    }
    #button, #buttonyes {
        margin: 10px;
        padding: 10px 20px;
        font-size: 16px;
    }
       #button {
        position: absolute;
        left: 20%;
        bottom: -50px;
    }
    #buttonyes {
        position: absolute;
        bottom: -50px;
        left: 60%;
        transform: translateX(-50%);
    }
    @media (max-width: 600px) {
        #gif-container {
            width: 80%;
        }
        #gif-text {
            font-size: 14px;
            padding: 8px;
        }
        #button, #buttonyes {
            padding: 8px 16px;
            font-size: 14px;
        }
    }
</style>