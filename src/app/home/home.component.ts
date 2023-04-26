import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      $("#img1").hover(() => {
        $("#pname").text("Hallstatt, Austria");
        $(this).addClass("imghover");
      },
        () => {
          $("#pname").text("");
          $(this).removeClass("imghover");
        });
      $("#img1").click(function () {
        window.location.href = "http://localhost:4200/hosts"
      });

      $("#img2").hover( () => {
        $("#pname2").text("Plitvice Lake");
        $(this).addClass("imghover");
      },
         () => {
          $("#pname2").text("");
          $(this).removeClass("imghover");
        });
      $("#img2").click(function () {
        window.location.href = "http://localhost:4200/hosts"
      });

      $("#img3").hover( () => {
        $("#pname3").text("Secret Lagoon");
        $(this).addClass("imghover");
      },
         () => {
          $("#pname3").text("");
          $(this).removeClass("imghover");
        });
      $("#img3").click(function () {
        window.location.href = "http://localhost:4200/hosts"
      });

      $("#img4").hover( () => {
        $("#pname4").text("Strasbourg, France");
        $(this).addClass("imghover");
      },
         () => {
          $("#pname4").text("");
          $(this).removeClass("imghover");
        });
      $("#img4").click(function () {
        window.location.href = "http://localhost:4200/hosts"
      });

      $("#img5").hover( () => {
        $("#pname5").text("Milan, Italy");
        $(this).addClass("imghover");
      },
         () => {
          $("#pname5").text("");
          $(this).removeClass("imghover");
        });
      $("#img5").click(function () {
        window.location.href = "http://localhost:4200/hosts"
      });

      $("#img6").hover( () => {
        $("#pname6").text("Mount Fuji");
        $(this).addClass("imghover");
      },
         () => {
          $("#pname6").text("");
          $(this).removeClass("imghover");
        });
      $("#img6").click(function () {
        window.location.href = "http://localhost:4200/hosts"
      });

      $("#img7").hover( () => {
        $("#pname7").text("Moscow, Russia");
        $(this).addClass("imghover");
      },
         () => {
          $("#pname7").text("");
          $(this).removeClass("imghover");
        });
      $("#img7").click(function () {
        window.location.href = "http://localhost:4200/hosts"
      });

      $("#img8").hover( () => {
        $("#pname8").text("San Francisco, California");
        $(this).addClass("imghover");
      },
         () => {
          $("#pname8").text("");
          $(this).removeClass("imghover");
        });
      $("#img8").click(function () {
        window.location.href = "http://localhost:4200/hosts"
      });

      $("#img9").hover( () => {
        $("#pname9").text("Rakotzbrucke, Germany");
        $(this).addClass("imghover");
      },
         () => {
          $("#pname9").text("");
          $(this).removeClass("imghover");
        });
      $("#img9").click(function () {
        window.location.href = "http://localhost:4200/hosts"
      });
    });

  }

}
