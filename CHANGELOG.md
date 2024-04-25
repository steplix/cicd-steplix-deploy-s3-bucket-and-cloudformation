# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Release 3.2.0

### Modified 22/04/2024

- **Components**
  - `PartnerCard`: Component modified show only a image.

- **Layout**:
  - `Footer`: Component modified without show the great place to work certification.

- **Modules**:
  - `Alliances`: Module modified to adapt to requirements.
  - `Memberships`: Module modified to adapt to requirements.
  - `Banner`: Module modified to show the great place to work certification on homepage.


- Enrique Serrani role modified to Comercial Manager.

### Added 22/04/2024

- **Modules**
  - `Certifications`: Custom module to shows all certifications images.

- **assets**
  - Include all assets to certification module on `Certifications` module in AboutUs page.

### Modified 19/04/2024

- **Components**
  - `PortfolioCard`: Component modified to redirect to client individual portfolio.

### Added 19/04/2024

- **Components**
  - `FlipCardDescription`: A custom component to show de flipCard description with a text and shows an array of chips and a back button.

- **Pages**
  - `FinketPage`: Custom page for client protfolio.

### Modified 12/04/2024

- **Components**
  - `FlipCard`: Component modified to recieve a TextButton.
  - `TextButton`: Component modified to receive an Icon.

### Added 12/04/2024

- **Pages**
  - `X28Page`: Custom page for client protfolio.

### Modified 12/04/2024

- **Modules**
  - `WhatWeBuildSection`: Component modified to recieve children.

### Added 11/04/2024

- **Pages**
  - `PowPage`: Custom page for client protfolio.

### Added 04/04/2024

- **Components**:
  - `ApproachSection`: Custom module for client protfolio.
  - `ChallengeSection`: Custom module for client protfolio.
  - `MoreProjectSection`: Custom module for client protfolio.
  - `PortfolioHeadingSection`: Custom module for client protfolio.
  - `PortfolioHeaderSection`: Custom module for client protfolio.
  - `WhatWeBuildSection`: Custom module for client protfolio.

- **Pages**
  - `SuraPage`: Custom page for client protfolio.

## Release 3.1.0 27/03/2024

### Added 18/03/2024

- **Components**:
  - `whatWeDoCard`: A card that shows the products for sale.
  - `whatWeDoModal`: Custom component that shows the details for products for sale.
  - `ButtonText`: Custom text button.
  - `ProductItem`: Component to render an icon and a short title.
  - `ProductItemDescription`: Component to  render icon, title and descriptions.
  - `Icons`: new icons added to the list

### Modified 18/03/2024

- `i18n`: Json modified to add new info about products on what we do page.

### Deleted 18/03/2024

- `OurSteps`: All section ourStep for what we do Page removed.


## Release 3.0.19 17/11/2023

### Modified 17/11/2023

- Adjustment in the role name of the X-28 review.


## Release 3.0.18 17/11/2023

### Modified 17/11/2023

- Enviroment variables configuration for static web.

### Added 17/11/2023

- new review for the client X-28.


## Release 3.0.17 03/11/2023

### Modified 03/11/2023

- Applied text adjustments over memberships and clients section in home page.


## Release 3.0.16 29/09/2023

### Added 29/09/2023

- New testimony from Valid client has been added.

### Modified 29/09/2023

- Text changes in mountain section in home page.
- Company address fix.
- Styles and linking fixes has been applied to the policies section at the footer.
- Insight tag script has been implemented and changed key prop of testimonials cards to get rid of warnings.


## Release 3.0.15 14/09/2023

### Added 15/09/2023

- Added Great Place to Work certification in footer and become steplixer page

## Release 3.0.14 13/09/2023

### Added 13/09/2023

- `Certifications`: Page section for certifications.
- Added Great Place to Work certification


## Release 3.0.13 29/08/2023

### Modified 29/08/2023

- The technologies listed in the home page are sorted alphabetically.


### Added 29/08/2023

- Meta tag robotos with index-follow value is added.


## Release 3.0.12 28/08/2023

### Modified 28/08/2023

- `TechnologySlider`: updated

### Added 28/08/2023

- New client review: Giovanna Maratta - Product Manager - Pow


## Release 3.0.11 11/08/2023

### Modified 11/08/2023

- Changed iqnet logo
- Lint fixes on `useHighlightSentences` hook

### Deleted 11/08/2023

- Deleted Banco Columbia in client carrousel in home page


## Release 3.0.10 10/08/2023

### Modified 10/08/2023

- Step SVG lines are now hidden across all breakpoints in mountain section of the home page
- Show iran and iqnet logos in footer section

## Release 3.0.9 25/07/2023

### Modified 25/07/2023

- **General**:
  - Fix on routing pages without language path
  - Removed photo from team carousel in about-us page

## Release 3.0.8 07/07/2023

### Modified 07/07/2023

- **General**:
  - Change customer list to slider component
  - Adjustment in the alignment of the LanguageSelector
  - Swap partners word for members

## Release 3.0.7 03/07/2023

### Modified 03/07/2023

- **General**:
  - Change button text 'Tell us your project' by 'Scope your project'
  - Fix vertical scroll on mobile and tablet
  - Hide certifications

## Release 3.0.6 23/06/2023

### Modified 22/06/2023

- **Modules**:
  - `OurValues`: Adjustment in alignment of values cards.

## Release 3.0.5 22/06/2023

### Added 22/06/2023

- **Components**:
  - `FlipCard`: A card that shows to sides and turn with animation.
  - `HighlightedText`: Custom component for highlight texts.

- **Modules**:
  - `Partners`: Added new section at home page.

### Modified 22/06/2023

- **Components**:
  - `FlipCard`: A card that shows to sides and turn with animation.
  - `Footer`: Adjustments in alignment and styles.

- **General**:
- Alterternate order of sections at home page
- Change office address at contact page
- Change style of the clients carousel at home page for mobile and sm responsives

## Release 3.0.4 24/05/2023

### Added 24/05/2023

- **Added routes supporting paths of the website v2**
  - process -> what-we-do
  - contact -> contact
  - stack -> home
  - jobs -> become-steplixer
  - about-us -> about-us

## Release 3.0.3 16/05/2023

### Modified 16/05/2023

- **Components**:
  - `Carousel`: Change in the image format for customer logos.
  - `Footer`: Privacy policies added on links.

## Release 3.0.2 03/05/2023

### Modified 03/05/2023

- **Components**:
  - `CardContact`: Show in row the contact cards in md responsive. The image format has been changed of sellers.

### Added 03/05/2023

- **Privacy Policy**:
  -Added privacy policies

## Release 3.0.1 24/04/2023

### Modified 24/04/2023

- **Components**:
  - `Avatar`: Code refactor.
  - `CardContact`: Change styles.
  - `Icons`: Add more icons.
  - `Carousel`: Change in the format of the customer carousel images.

## Release 3.0.0 03/04/2023

### Modified 30/01/2023

Pipelines:
  - `.gitlab-ci.yml`: Fixed

## Release 2.0.0 16/05/2022

## Release 0.0.1 30/03/2022

### Added 30/03/2022

- **Components**
  - `Accordion`: A generic and custom accordion component..
  - `Avatar`: A coomponent that shows an image and name.
  - `BecomeCard`: A card that shows Stepix benefits.
  - `ButtomCard`: A custom buttom that appears on the cards.
  - `ButtonRaise`: A custom button with Icon.
  - `CardContact`: A card component that contains an Avatar and contact info.
  - `CardHero`: A card component with title and description.
  - `CardIcon`: A card component with Icon and text.
  - `Carousel`: Custom slider.
  - `Chip`: Custom chip for general use.
  - `CustomNextLink`: Custom link.
  - `Heading`: A component used for headers.
  - `HeadTag`: A component that contains meta tags information.
  - `Icon`: All svg icons for this project turn into a tsx element.
  - `LanguageSelector`: A component for language selection.
  - `MountainStep`: Custom component with animation.
  - `PartnerCard`: A card with image and description.
  - `PhotoCarousel`: Custom slider for pictures.
  - `PortfolioCard`: Custom card with experience information.
  - `PostCard`: A card component to show company publicity.
  - `Service`: A component showing services offered.
  - `SubMenu`: Custom menu with links and LanguageSelector.
  - `TechnologySlider`: A custom slider to show technology tools.
  - `TechnologyChip`: A custom chip.
  - `TestimonialCard`: A custom card with client quotes.
  - `TextField`: A component that shows a text and a copy button.
  - `Title`: Custom titles that contains heading component.
  - `ToastIcon`: A custom toast to copy button.
  - `Transitionwrapper`: A custom wraper for trasitions pages.
