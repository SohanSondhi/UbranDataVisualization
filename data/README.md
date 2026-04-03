This readme file was generated on 2025-01-09 by Elif Ensari Sucuoglu

## GENERAL INFORMATION
### Title of Dataset
Construction costs of urban rail projects worldwide

### Author/Principal Investigator Information

Name: Alon Levy  
ORCID: [0000-0001-5137-5820](https://orcid.org/0000-0001-5137-5820)  
Institution: Marron Institute of Urban Management  
Email: alon.levy@nyu.edu

Name: Eric Goldwyn  
Institution: Marron Institute of Urban Management  
Email: elg229@nyu.edu

### Author/Associate/Co-investigator/Collaborator Information

Name: Elif Ensari  
ORCID: [0000-0003-0451-2217](https://orcid.org/0000-0003-0451-2217)  
Institution: Marron Institute of Urban Management  
Email: elif.ensari@nyu.edu

Name: Marco Chitti  
ORCID: [0000-0001-5032-4212](https://orcid.org/0000-0001-5032-4212)  
Institution: Marron Institute of Urban Management  
Email: mc9508@nyu.edu

### Date of data collection:
2018-2024

### Funding sources:
Prime Sponsor: Laura and John Arnold Foundation  
Project Title: Understanding Transit Infrastructure Costs in American Cities

## SHARING/ACCESS INFORMATION

### Licenses/restrictions placed on the data:
[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)

### Links to publications that cite or use the data:
Transit Costs Project Final Report: [https://transitcosts.com/transit-costs-study-final-report/](https://transitcosts.com/transit-costs-study-final-report/)

Goldwyn, Eric (2024). "Prioritizing politics ahead of transit projects." New York University Journal of Law and Liberty, 17(3), 422-439, [https://heinonline.org/HOL/P?h=hein.journals/nyujlawlb17&i=443](https://heinonline.org/HOL/P?h=hein.journals/nyujlawlb17&i=443)

Liscow, Zachary (2024). "State Capacity for Building Infrastructure." In
Strengthening America’s Economic Dynamism, edited by Melissa S. Kearney and Luke Pardue.
Washington, DC: Aspen Institute. [https://doi.org/10.5281/zenodo.14036826](https://doi.org/10.5281/zenodo.14036826)

Liscow, Zachary D. (March 28, 2024). "Getting Infrastructure Built: The Law and Economics of Permitting." Available at SSRN: [http://dx.doi.org/10.2139/ssrn.4775481](http://dx.doi.org/10.2139/ssrn.4775481)

Aras, R. L., Ouellette, N. T., & Jain, R. K. (2023). "A barrier too far: Understanding the role of intersection crossing distance on bicycle rider behavior in Chicago." Environment and Planning B: Urban Analytics and City Science, 50(8), 2118-2132. [https://doi.org/10.1177/23998083221147922](https://doi.org/10.1177/23998083221147922)

### Links to other publicly accessible locations of the data:
Public database: This is being updated ongoing basis [https://docs.google.com/spreadsheets/d/16GoHcbW-eVzHUUP_XCWVXS1s_i3ZBnmZh4kvdSX7muU/edit?usp=sharing](https://docs.google.com/spreadsheets/d/16GoHcbW-eVzHUUP_XCWVXS1s_i3ZBnmZh4kvdSX7muU/edit?usp=sharing)

Landing page: [https://transitcosts.com/data/](https://transitcosts.com/data/)

Visualizations: [https://transitcosts.com/new-data/](https://transitcosts.com/new-data/)

Reports: [https://transitcosts.com/cases/](https://transitcosts.com/cases/)

Project home page: [https://transitcosts.com/](https://transitcosts.com/)

### Was data derived from another source?

If yes, list source(s):

Inflation Rate: [https://data.bls.gov/timeseries/CUUR0000SA0](https://data.bls.gov/timeseries/CUUR0000SA0)  
PPP Index: [https://data.worldbank.org/indicator/PA.NUS.PPP](https://data.worldbank.org/indicator/PA.NUS.PPP)

### Recommended citation for this dataset:

Levy, A., Goldwyn, E., Ensari, E., & Chitti, M. (2025). Construction costs of urban rail projects worldwide [Data set]. New York University. https://doi.org/10.58153/9wnjp-kez15

## DATA & FILE OVERVIEW:
This dataset provides comprehensive data on the construction costs of urban rail projects worldwide for analysis of rail project costs across different regions and time periods. It includes details such as project locations, costs (both real and adjusted for inflation), construction methods (elevated, underground, or at-grade), and various project specifications (e.g., length, number of stations, and start/end years).

### Files:
**Merged_Costs_1-4.csv**: data containing project ID, cost, location, length, and other relevant attributes.

### Data Dictionary:
<table><thead>
  <tr>
    <th>Column name</th>
    <th>Explanation</th>
    <th>Format</th>
    <th>Notes</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Country</td>
    <td>The country code of the project</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>City</td>
    <td>The city of the project</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>Line</td>
    <td>The name of the project</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>Phase</td>
    <td>The phase of the project</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>Start_year</td>
    <td>Start year of construction</td>
    <td>YYYY<br>Missing data codes: NaN</td>
    <td> </td>
  </tr>
  <tr>
    <td>End_year</td>
    <td>End year of construction</td>
    <td>YYYY<br>Missing data codes: NaN</td>
    <td> </td>
  </tr>
  <tr>
    <td>RR</td>
    <td>Is it a regional rail project?</td>
    <td>0,1</td>
    <td>Regional rail denotes a line running on mainline or mainline-compatible tracks, including commuter rail tunnels and RER and S-Bahn projects</td>
  </tr>
  <tr>
    <td>Length</td>
    <td>The length of the line or phase in kilometers</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>TunnelPer</td>
    <td>Percentage of tunnel</td>
    <td>0-100<br>Missing data codes: NaN</td>
    <td> </td>
  </tr>
  <tr>
    <td>Tunnel</td>
    <td>Length of tunnel in kilometers</td>
    <td>Missing data codes: NaN</td>
    <td>TunnelPer and Tunnel fields are more accurate than elevated, and at-grade values. Tunnel length information was often retrieved from the same sources as the cost and length information but elevated and at-grade lengths were calculated or derived from Open Street Maps.</td>
  </tr>
  <tr>
    <td>Elevated</td>
    <td>Length of the section that is elevated</td>
    <td>Missing data codes: NaN</td>
    <td>TunnelPer and Tunnel fields are more accurate than elevated, and at-grade values. Tunnel length information was often retrieved from the same sources as the cost and length information but elevated and at-grade lengths were calculated or derived from Open Street Maps.</td>
  </tr>
  <tr>
    <td>Atgrade</td>
    <td>Length of the section that is at grade</td>
    <td>Missing data codes: NaN</td>
    <td>TunnelPer and Tunnel fields are more accurate than elevated, and at-grade values. Tunnel length information was often retrieved from the same sources as the cost and length information but elevated and at-grade lengths were calculated or derived from Open Street Maps.</td>
  </tr>
  <tr>
    <td>Stations</td>
    <td>The number of stations</td>
    <td>Missing data codes: NaN</td>
    <td> </td>
  </tr>
  <tr>
    <td>Platform_length_meters</td>
    <td>The length of platforms in meters</td>
    <td>Missing data codes: NaN</td>
    <td> </td>
  </tr>
  <tr>
    <td>Source1</td>
    <td>Source type for length, tunnel, station, and platform data</td>
    <td>Measured: Measured on GoogleMaps<br>Media<br>Plan: Government Document<br>Trade: Specialized industry journals such as Railway Gazette and International Railway Journal<br>Wiki: Wikipedia, Wikiland<br>Missing data codes: NaN</td>
    <td>Trade denotes specialized trade media, distinct from general mass media</td>
  </tr>
  <tr>
    <td>Cost</td>
    <td>Cost in original currency</td>
    <td></td>
    <td>For the majority of the entries, costs exclude rolling stock. In a few cases where disaggregated data doesn't exist, it may include rolling stock. See Comments column for clarification.</td>
  </tr>
  <tr>
    <td>Currency</td>
    <td>Currency</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>Year</td>
    <td>Year used to adjust the cost for PPP and inflation. Often the mid-year of construction, unless the Cost value is already adjusted for a given year.</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>PPP_rate</td>
    <td>Purchasing power parity (2023)</td>
    <td> </td>
    <td>Source: <a href="https://data.worldbank.org/indicator/PA.NUS.PPP">https://data.worldbank.org/indicator/PA.NUS.PPP</a></td>
  </tr>
  <tr>
    <td>Real_cost</td>
    <td>Cost in dollars adjusted for PPP (2023)</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>Cost_km_millions</td>
    <td>Cost per kilometer in millions of dollars</td>
    <td></td>
    <td> </td>
  </tr>
  <tr>
    <td>Anglo</td>
    <td>Is the project in an English speaking country?</td>
    <td>0,1</td>
    <td></td>
  </tr>
  <tr>
    <td>Inflation_index</td>
    <td>Inflation index</td>
    <td> </td>
    <td>Source: <a href="https://data.bls.gov/timeseries/CUUR0000SA0">https://data.bls.gov/timeseries/CUUR0000SA0</a></td>
  </tr>
  <tr>
    <td>Real_cost_2023_dollars</td>
    <td>Cost in dollars adjusted for PPP and inflation (2023)</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>Cost_km_2023_dollars</td>
    <td>Adjusted cost per kilometer</td>
    <td>Records with missing data in this field in the public database have been omitted from this version.</td>
    <td> </td>
  </tr>
  <tr>
    <td>Source2</td>
    <td>Source type for cost data</td>
    <td>Media<br>Plan: Government Document<br>Trade: Specialized industry journals such as Railway Gazette and International Railway Journal<br>Missing data codes: NaN</td>
    <td>Trade denotes specialized trade media, distinct from general mass media</td>
  </tr>
  <tr>
    <td>Reference1</td>
    <td>URL for Source2</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>Reference2</td>
    <td>Additional reference URL for Source2</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>Reference3</td>
    <td>Additional reference URL for Source2</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Comments</td>
    <td>Authors comments </td>
    <td>Field: Comment</td>
    <td></td>
  </tr>
</tbody></table>

### Key Formulas:

- Year (unless the cost is adjusted for a given year, this is the mid year of construction): (End year-Start year)/2
- TunnelPer: Tunnel length/Length
- Real cost: Cost * PPP Rate
- Real cost (2023 dollars): Real cost * Inflation Index
- Cost/km (2023 dollars): Real cost (2023 dollars)/Length

## METHODOLOGICAL INFORMATION
### Description of methods used for collection/generation of data:
Government, trade, media or other sources were searched for information and the formulas above were applied to data to compute additional information.

### Methods for processing the data:
If grade information was available for the tunnel and either of elevated or at-grade sections of lines, the length of the remaining section was computed by subtracting the lengths with the known grade information from the total length of the line. 

Tunnel, at-grade and elevated sections of lines were verified by Open Street Maps geometry where available.

### People involved with sample collection, processing, analysis and/or submission:
Alon Levy, NYU: Contact person, Data collector, Data curator, Data manager  
Eric Goldwyn, NYU: Contact person, Data collector, Data curator, Data manager  
Elif Ensari, NYU : Contact person, Data collector, Data curator, Data manager  
Marco Chitti, NYU: Data collector, Data curator  
Steve Chiu: Data collector  
Abdirashid Dahir: Data collector  
Yangbo Du: Data collector  
Anan Maalouf: Data collector  
Zhexuan Tang, NYU: Data collector  
Yinan Yao: Data collector  