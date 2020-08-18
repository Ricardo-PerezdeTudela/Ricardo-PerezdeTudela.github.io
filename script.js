<!--- JS script --->
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script>
        $(document).ready(function(){
            $("#content").load("home.html");
            var h0 = $("#content").innerHeight();
            $(".links").click(function(){
                $('#nav-active').attr("id","");
                $(this).parent().attr("id","nav-active");
                $("#content").load($(this).attr("page")+".html");
                var h = $("#content").contents().innerHeight();
                if (h > h0); { $('#aside').css("height",(h+'px')); }
            });
        });
    </script>
