<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LearnBoost</title>
    <link rel="icon" type="image/x-icon" href="assets/logo.png">
    <link href="./output.css" rel="stylesheet">
</head>
<body>
    <script src="selection.js"></script>
    <div class="bg-custom-bg-1 text-center w-1/4 h-[29em] m-0 border border-gray-200 absolute top-1/2 left-1/2 transform 
    -translate-x-1/2 -translate-y-1/2">
        <div class="bg-white h-[93%]">
            <div class="bg-custom-bg-2 w-auto h-[5em] justify-center flex items-center">
                <h1 class="m-0 text-[27px] text-white uppercase font-custom">LearnBoost</h1>
            </div>
            <div class="mt-[40px] ml-[30px] mr-[30px] mb-[15px] text-left relative">
                <form name="loginForm" onsubmit="return roleSelect(event)">
                    <label class="ml-[7em]">Select your role</label>
                    <select name="roles" id="roles" class="bg-white border border-gray-200 rounded-[0.5em] text-left pl-[13px] mt-[1em] mx-[7em] 
                    mb-[9em] h-[40px] w-[12em] block">
                        <option value="">Select</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                    <input class="mt-[20px] mb-[50px] rounded-[5px] w-full block h-[30px] text-[15px] box-border text-center text-[20px] 
                    h-[55px] text-white mb-0 bg-submit-btn font-bold" type="submit" value="LOGIN">
                </form>
                <div class="text-red-500" id="error"></div>
            </div>
        </div>
    </div>
</body>
</html>