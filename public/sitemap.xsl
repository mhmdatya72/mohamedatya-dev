<?xml version="1.0" encoding="UTF-8"?>
<!-- Renders sitemap.xml as a readable table in browsers. Search engines ignore this file and read the XML directly. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  exclude-result-prefixes="sm xhtml image">
  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap — Mohamed Atya Hawash</title>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; padding: 2.5rem 1.25rem; background: #08080f; color: #f4f4fb; font-family: "Segoe UI", system-ui, sans-serif; line-height: 1.6; }
          .wrap { max-width: 1000px; margin: 0 auto; }
          h1 { margin: 0 0 .4rem; font-size: 1.9rem; letter-spacing: -.02em; }
          .lead { margin: 0 0 1.6rem; color: #a3a3bb; }
          .badge { display: inline-block; margin-inline-end: .5rem; padding: .25rem .8rem; border-radius: 99px; background: rgba(140, 112, 255, .15); border: 1px solid rgba(140, 112, 255, .4); color: #b3a2ff; font-weight: 700; font-size: .85rem; }
          .card { overflow-x: auto; border: 1px solid rgba(255, 255, 255, .09); border-radius: 16px; background: #12121d; }
          table { width: 100%; border-collapse: collapse; font-size: .92rem; }
          th, td { padding: .85rem 1rem; text-align: start; vertical-align: top; }
          th { color: #a3a3bb; font-size: .75rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; border-bottom: 1px solid rgba(255, 255, 255, .09); white-space: nowrap; }
          tr + tr td { border-top: 1px solid rgba(255, 255, 255, .06); }
          a { color: #b3a2ff; text-decoration: none; word-break: break-all; }
          a:hover { text-decoration: underline; }
          .lang { display: inline-block; padding: .1rem .6rem; border-radius: 6px; font-size: .78rem; font-weight: 700; }
          .ar { background: rgba(63, 217, 192, .14); color: #3fd9c0; }
          .en { background: rgba(127, 166, 255, .16); color: #7fa6ff; }
          .alt { display: block; color: #a3a3bb; font-size: .78rem; }
          .num { color: #a3a3bb; }
          footer { margin-top: 1.2rem; color: #a3a3bb; font-size: .82rem; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>Sitemap</h1>
          <p class="lead">
            <span class="badge"><xsl:value-of select="count(sm:urlset/sm:url)"/> URLs</span>
            Arabic (primary) and English versions of every public page, linked with hreflang.
          </p>
          <div class="card">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>URL</th>
                  <th>Language</th>
                  <th>Priority</th>
                  <th>Frequency</th>
                  <th>Last modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sm:urlset/sm:url">
                  <tr>
                    <td class="num"><xsl:value-of select="position()"/></td>
                    <td>
                      <a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a>
                      <xsl:for-each select="xhtml:link">
                        <span class="alt">↔ <xsl:value-of select="@hreflang"/>: <xsl:value-of select="@href"/></span>
                      </xsl:for-each>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="contains(sm:loc, '/en')"><span class="lang en">English</span></xsl:when>
                        <xsl:otherwise><span class="lang ar">العربية</span></xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td><xsl:value-of select="sm:priority"/></td>
                    <td><xsl:value-of select="sm:changefreq"/></td>
                    <td><xsl:value-of select="substring(sm:lastmod, 1, 10)"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          <footer>Generated for search engines — view the page source to see the raw XML.</footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
