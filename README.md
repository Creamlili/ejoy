<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ข้อมูล</title>
    <link href="style.css"
   
</head>

<body>
    <div class="container">
        <div class="label-container"
        </div>

        <div class="table-container">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <td colspan="8" class="headertext">ข้อมูลส่วนตัว</td>
                    </tr>
                    <tr>
                        <td>ชื่อ</td>
                        <td>นามสกุล</td>
                        <td>ชื่อเล่น</td>
                        <td>วัน/เดือน/ปีเกิด</td>
                        <td>ของที่ชอบ</td>
                        <td>สีที่ชอบ</td>
                        <td>เพื่อนสนิท</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>หิรัญญิการ์</td>
                        <td>ตันเอี๋ยม</td>
                        <td>ลิลิน</td>
                        <td>30/03/46</td>
                        <td>ปลา</td>
                        <td class="black">black</td>
                        <td>พีช</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="main-form-container">
            <div class="form-container">
                <form id="Formcat" action="#">
                    <h1>Sample Form</h1>
                    <label for="name">ชื่อ:</label><br>
                    <input type="text" id="name" name="name" placeholder="ชื่อ" class="form-control"><br>

                    <label for="email">อีเมล:</label><br>
                    <input type="email" id="email" name="email" placeholder="อีเมล" class="form-control"><br>

                    <label for="age">อายุ:</label><br>
                    <input class="form-control" type="number" onkeydown="TeacherSaidRemove_E(event)" id="age" name="age" placeholder="อายุ"><br>

                    <label>เพศ:</label><br>
                    <input type="radio" name="gender" id="male" value="Male">
                    <label for="male">ชาย</label>
                    <input type="radio" name="gender" id="female" value="Female">
                    <label for="female">หญิง</label><br><br>

                    <label for="comment">ความคิดเห็น:</label><br>
                    <textarea id="comment" name="comment" class="form-control" aria-label="With textarea"></textarea><br>

                    <input type="submit" value="Submit">
                </form>
            </div>
        </div>
        <div class="table-container">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <td colspan="4" class="headertext">รายชื่อเพื่อนในห้อง</td>
                    </tr>
                    <tr>
                        <td>ลำดับ</td>
                        <td>รหัสประจำตัว</td>
                        <td>ชื่อ</td>
                        <td>นามสกุล</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>15764</td>
                        <td>วรชัย</td>
                        <td>มีหนุน</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>67022</td>
                        <td>วลัญช์ธภัทร</td>
                        <td>พูลสวัสดิ์</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>15691</td>
                        <td>ธนกร</td>
                        <td>ชุติมาพรกุล</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>17358</td>
                        <td>ฐิติพล</td>
                        <td>บุญแสน</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>17359</td>
                        <td>วรินทร</td>
                        <td>นุชเสม</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>17525</td>
                        <td>หิรัญญิการ์</td>
                        <td>ตันเอี๋ยม</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>17563</td>
                        <td>รัชชานนท์</td>
                        <td>ชัยมั่น</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="result-container" id="mamu" style="display: none;"></div>
        <script src="assets/js/app.js"></script>
    </div>
</body>
</html>
