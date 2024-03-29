import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zinger-website';
}

export class Constants {
  public static frameworkGithubUrl = 'https://github.com/zinger-framework/zinger-core';
  public static zingerGithubUrl = 'https://github.com/shrikanth7698/Zinger-Android-App';
  public static zingerPartnerGithubUrl = 'https://github.com/harshavardhan98/Zinger-Seller-App';

  public static apiDocsUrl = 'https://documenter.getpostman.com/view/6369926/TVRoZ6jW';
  public static docsUrl = '/docs/getting-started/architecture-overview';
  public static guideUrl = '/docs/installation-guide/prerequisites';
  public static UIManualUrl = '/docs/user-interface-manual/overview';
  public static contributeUrl = '/docs/community';
  public static caseStudyUrl = '/case-study';
  public static requestDemoUrl = 'https://harshavardhan98.typeform.com/to/w6pXt3';

  public static logeshProfile = 'https://logeshdina.tech';
  public static harshaProfile = 'https://www.linkedin.com/in/harshavardhan-p';
  public static shrikanthProfile = 'https://shrikanthravi.me/';
}
