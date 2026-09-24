$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$css = Get-Content -Raw (Join-Path $root 'assets/css/style.css')
$script = Get-Content -Raw (Join-Path $root 'assets/js/main.js')
$homeHtml = Get-Content -Raw (Join-Path $root 'index.html')
$about = Get-Content -Raw (Join-Path $root 'about-us.html')
$services = Get-Content -Raw (Join-Path $root 'services.html')
$serviceDetails = Get-ChildItem (Join-Path $root 'services') -Filter '*.html' | ForEach-Object { Get-Content -Raw $_.FullName }

function Assert-Contains([string]$content, [string]$expected, [string]$message) {
  if (-not $content.Contains($expected)) { throw "$message Missing: $expected" }
}
function Assert-NotContains([string]$content, [string]$unexpected, [string]$message) {
  if ($content.Contains($unexpected)) { throw "$message Found: $unexpected" }
}

Assert-Contains $homeHtml 'images/nicu-image.jpg' 'Home page should use the supplied NICU image.'
Assert-Contains $about 'images/team.jpg' 'About page should use the supplied team image.'
Assert-Contains $services 'images/nicu-image.jpg' 'Services page should use the supplied NICU image.'
Assert-NotContains $homeHtml 'rating-badge' 'The legacy review rating badge should not remain on the home page.'
Assert-NotContains $homeHtml 'Read more parent reviews' 'The external parent-review link should not remain on the home page.'
Assert-Contains $homeHtml 'JFWebsiteWidget-01a0d29c97e87000835d3db0c1c2393f35b7' 'The parent-review section should include the supplied reviews widget.'
Assert-NotContains $homeHtml 'Rinku Makwana' 'Legacy review cards should not remain in the page source.'
if ($serviceDetails -match 'page-hero-photo') { throw 'Service detail heroes should not contain duplicate images.' }
Assert-Contains $homeHtml 'data-count="2015"' 'The stats strip should expose its count-up targets.'
Assert-Contains $homeHtml '5500+' 'The homepage should highlight the admissions milestone.'
Assert-Contains $homeHtml 'outcome-timeline' 'The outcomes section should use the editorial timeline layout.'
if ($homeHtml.IndexOf('Not just a hospital - a Medical Academy and Advanced Healthcare Institute') -gt $homeHtml.IndexOf('Outcomes that reflect our commitment')) { throw 'The Medical Academy section should appear before the outcomes section.' }
Assert-Contains $homeHtml '<div class="outcome-timeline-item outcome-safety">' 'Mortality should be an inline timeline milestone.'
Assert-NotContains $homeHtml 'Care outcomes built on 24&times;7 specialist support.' 'The mortality milestone should not include helper copy.'
Assert-Contains $homeHtml 'Dr. Kunal P. Ahya.jpg' 'The homepage should use the supplied Kunal portrait.'
Assert-Contains $homeHtml 'data-suffix="×7"' 'The availability stat should display 24×7 only.'
Assert-NotContains $homeHtml 'data-suffix="×7×365"' 'The availability stat should not include 365.'
Assert-Contains $css 'a[href^="tel:"]' 'Telephone links should have an explicit hover treatment.'
Assert-Contains $css '@media (prefers-reduced-motion: reduce)' 'Motion must respect reduced-motion preferences.'
Assert-Contains $css '.reveal.is-visible' 'Revealed sections should have a visible state.'
Assert-Contains $css '--space-section: 40px;' 'The shared section rhythm should be tokenized at 40px.'
Assert-Contains $css 'padding-block: var(--space-section);' 'Standard sections should use the shared vertical rhythm.'
Assert-Contains $css '.faq-content' 'FAQ answers should have a dedicated animated wrapper.'
Assert-Contains $css 'height: 0;' 'FAQ answers should animate from an explicit collapsed height.'
Assert-Contains $css 'translateY(var(--digit-offset))' 'Digit reels should use a browser-supported transform offset.'
Assert-Contains $css 'font-variant-numeric: tabular-nums;' 'Digit reels should use stable-width numerals.'
Assert-Contains $css 'top: calc(clamp(36px, 5vw, 56px) + 6px);' 'The outcome thread should align with the timeline marker centers.'
Assert-Contains $css 'left: calc(var(--space-4) + 6px);' 'The mobile outcome thread should align with left-side markers.'
Assert-Contains $css '.outcome-timeline-item:nth-child(2)::before' 'The second outcome milestone should use the pink marker treatment.'
Assert-NotContains $css 'vertical-align: top;' 'Digit reels should align with the normal text baseline.'
Assert-Contains $css 'Logo-web.png' 'Brand links should use the supplied logo asset.'
Assert-Contains $css 'width: 210px;' 'The navigation logo should use the approved larger size.'
Assert-Contains $script 'content.style.height' 'FAQ transitions should use one explicit height animation.'
Assert-Contains $script 'window.matchMedia' 'FAQ controls must close immediately when reduced motion is requested.'
Assert-Contains $script 'IntersectionObserver' 'Stats should begin counting only when visible.'
Assert-Contains $script 'main > section' 'Major site sections should use the shared reveal observer.'
Assert-Contains $script 'revealObserver' 'Site reveals should share one observer.'
Assert-Contains $script 'stat-digit' 'Stats should use individual rolling digit reels.'

Write-Output 'PASS: site enhancement expectations verified.'
