import { AfterViewInit, Component } from '@angular/core';
import { FooterCsie } from "../footer-csie/footer-csie";
import { HeaderCsie } from "../header-csie/header-csie";
import { RouterOutlet } from "@angular/router";
import { AsideCsie } from "../aside-csie/aside-csie";

@Component({
  selector: 'app-main-csie',
  imports: [FooterCsie, HeaderCsie, RouterOutlet, AsideCsie],
  templateUrl: './main-csie.html',
  styleUrl: './main-csie.css',
})
export class MainCsie implements AfterViewInit{

  ngAfterViewInit(): void {
    if ((window as any).initLegacyScripts) {
      (window as any).initLegacyScripts();
    }
  }
}
