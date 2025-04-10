import { expect, Locator, type Page } from '@playwright/test';
import { TwitterX } from './common-components/twitterx';
import { Facebook } from './common-components/facebook';
import { LinkedIn } from './common-components/linkedIn';

export class Footer {
  private readonly page: Page;
  private readonly footerCopyText: Locator;
  public readonly twitterXIcon: TwitterX;
  public readonly facebookIcon: Facebook;
  public readonly linkedInIcon: LinkedIn;

  constructor(page: Page) {
    this.page = page;
    this.twitterXIcon = new TwitterX(page);
    this.facebookIcon = new Facebook(page);
    this.linkedInIcon = new LinkedIn(page);
    this.footerCopyText = page.locator('[class="footer_copy"]');
  }

  async footerText() {
    expect(this.footerCopyText).toHaveText(
      '© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy',
    );
  }
}
