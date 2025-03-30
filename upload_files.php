<link rel="stylesheet" href="css/form_style.css">
<section class="file_detail_container">
    <fieldset class="qqq">
        <legend>Add Product</legend>
        <form action="add_product2.php" method="POST" enctype="multipart/form-data">


        <label for="filename">File Name</label>
        <input type="text" name="filename" class="filename" maxlength="25">
        <label for="file_type">File Type</label>
        <select name="file_type" class="file_type">
            <option value="">Select</option>
            <option value="Utility">Utility</option>
            <option value="Dev Apps">Dev Apps</option>
            <option value="Games">Games</option>
            <option value="Videos">Videos</option>
            <option value="Compressed">Compressed</option>
        </select>

        <label for="file_size">File Size</label>
        <input type="number" name="file_size" class="file_size" maxlength="1000"/>
        
        <label for="description">Description</label>
        <input type="text" name="description" class="description" maxlength="80"/>

        <label for="fileInput">
            <img src="images/preview.png" class="pic" style="width: 100px; height: 100px;" title="Click to add product picture"/>
        </label>
        <input type="file" id="fileInput" name="product_picture" onchange="previewPicture()" style="display: none;">
        <button class="btnSave" name="btnSave">Save</button>
        </form>
        <div class="msgPicture"></div>
    </fieldset>
</section>

<style>
    *{
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        box-sizing: border-box;
    }
    .file_detail_container{
        margin: auto;
        margin-top: 5em;
        width: 90%;
        border: 1px solid #e9e7e7;
        border-radius: 8px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, auto));
        gap: 2em;
    }
    .file_detail_container img{
        display: block;
        margin: auto;
        width: 95%;
    }
    .file_detail_container h2{
        margin-top: 2em;
        font-size: 35px;
        font-weight: 400;
    }
    .file_detail_container h3{
        font-size: 26px;
        font-weight: 400;
    }
    .file_detail_container p{
        margin-top: 2em;
        padding: 5px 0 5px 0;
    }
    .btnAddSubtract{
        width: 110px;
    }
    .btnAddSubtract button{
        display: inline-block;
        padding: 0 3px 0 3px;
        background-color: transparent;
        border: 0 solid #e1e0e0;
        border-radius: 4px;
        font-size: 38px;
    }
    .btnAddSubtract button:hover{
        opacity: .5;
        cursor: pointer;
    }
    .file_detail_container .btnAddCart{
        margin-top: 1em;
        margin-bottom: 2em;
        border: 0;
        padding: 14px 30px 14px 30px;
        border-radius: 28px;
        background: linear-gradient(45deg, #4d85fe, #0f0160);
        font-size: 20px;
        color: #fcfcfc;
    }
    .file_detail_container .btnAddCart:hover{
        background: linear-gradient(45deg, #0f0160, #4d85fe);
        cursor: pointer;        
    }
</style>


<script>
    let msgPicture = document.querySelector(".msgPicture");
    let btnSave = document.querySelector(".btnSave");
    let file_category = document.querySelector(".file_category");
    let qqq = document.querySelector(".qqq");
    const previewPicture = ()=>{
        let pic = document.querySelector(".pic");
        let file = document.querySelector("#fileInput");
        let msgPicture = document.querySelector(".msgPicture");
        pic.src = window.URL.createObjectURL(file.files[0]);
        pic.style.width="95%";
        pic.style.height="auto";

        var regex = new RegExp('[^.]+$');
        extension = file.value.match(regex);
        if (extension == "jpeg" || extension == "png" || extension == "jpg") {
            btnSave.style.display="block";
            msgPicture.innerHTML = "";
         } else{
            pic.src="images/error.png";
            btnSave.style.display = "none";
            msgPicture.style.display = "block";
            msgPicture.innerHTML = "<font style= 'color: tomato'> You are trying to upload a <b>." + extension + "</b>\n\
            file which is not supported by this platform. please make sure your file is either <b>. jpg or .png <.b>file </font>";
        }
    };
</script>
<!-- <?php include_once"./bottom_component.php"; ?> -->