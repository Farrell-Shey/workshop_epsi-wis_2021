<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="assets/css/app.css" rel="stylesheet" type="text/css">
    <title>Document</title>
</head>
<body style="background: rosybrown">

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal">
    Launch demo modal
</button>

<div class="navbar">
    <nav class="nav">
        <a id="profile" class="nav-link">
            <svg class="svg" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 12.5C14.8021 12.5 16.6667 10.6354 16.6667 8.33335C16.6667 6.03127 14.8021 4.16669 12.5 4.16669C10.1979 4.16669 8.33332 6.03127 8.33332 8.33335C8.33332 10.6354 10.1979 12.5 12.5 12.5ZM12.5 14.5834C9.71874 14.5834 4.16666 15.9792 4.16666 18.75V20.8334H20.8333V18.75C20.8333 15.9792 15.2812 14.5834 12.5 14.5834Z"/>
            </svg>
            Profile
        </a>
        <a id="plan" class="nav-link active">
            <svg class="svg" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3542 3.125L21.1875 3.15625L15.625 5.3125L9.375 3.125L3.5 5.10417C3.28125 5.17708 3.125 5.36458 3.125 5.60417V21.3542C3.125 21.6458 3.35417 21.875 3.64583 21.875L3.8125 21.8437L9.375 19.6875L15.625 21.875L21.5 19.8958C21.7187 19.8229 21.875 19.6354 21.875 19.3958V3.64583C21.875 3.35417 21.6458 3.125 21.3542 3.125ZM15.625 19.7917L9.375 17.5937V5.20833L15.625 7.40625V19.7917Z"/>
            </svg>
            Plan
        </a>
    </nav>
</div>

<section id="search" class="search" onclick="openSearch()">
    <form method="post" action="#" class="form">
        <div class="search-bar">
            <button class="btn" type="submit">
                <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.74259 19.4855C4.36191 19.4855 0 15.1236 0 9.74277C0 4.36199 4.36191 0 9.74259 0C15.1233 0 19.4852 4.36199 19.4852 9.74277C19.4852 11.9941 18.7216 14.0671 17.4392 15.7169L24 22.2778L22.2777 24.0001L15.717 17.4392C14.0672 18.7218 11.9941 19.4855 9.74259 19.4855ZM17.0492 9.74293C17.0492 13.7785 13.7778 17.05 9.74224 17.05C5.70673 17.05 2.4353 13.7785 2.4353 9.74293C2.4353 5.70734 5.70673 2.43585 9.74224 2.43585C13.7778 2.43585 17.0492 5.70734 17.0492 9.74293Z" fill="#8E8E8E"/>
                </svg>
            </button>
            <input onclick="openSearch()" id="location" class="form-control" name="location" type="text" placeholder="rechercher dans roulette" required>
        </div>
    </form>
</section>


<aside id="Modal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="title">
                    signaler
                </h2>
                <span class="sub-title">
                Boulevard Vincent Gâche
            </span>
            </div>

            <div class="modal-body">
                le contenu
            </div>

            <div class="modal-footer">
                <div class="btn-danger btn" data-bs-dismiss="modal">
                    <svg class="svg" width="24" height="25" viewBox="0 0 24 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7.19601L17.59 5.78601L12 11.376L6.41 5.78601L5 7.19601L10.59 12.786L5 18.376L6.41 19.786L12 14.196L17.59 19.786L19 18.376L13.41 12.786L19 7.19601Z"
                              fill="#FBFAF8"/>
                    </svg>
                </div>
                <div class="btn-primary btn">
                    <svg class="svg" width="24" height="25" viewBox="0 0 24 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99991 16.956L4.82991 12.786L3.40991 14.196L8.99991 19.786L20.9999 7.78604L19.5899 6.37604L8.99991 16.956Z"
                              fill="#FBFAF8"/>
                    </svg>
                    terminer
                </div>
            </div>
        </div>
    </div>


</aside>

<script src="assets/js/app.js"></script>
</body>
</html>