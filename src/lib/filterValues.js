
const causes = [
  {
    "id" : 102,
    "order" : 102,
    "name" : "Education/training",
    "altName" : "Education",
  },
  {
    "id" : 105,
    "order" : 105,
    "name" : "The prevention or relief of poverty",
    "altName" : "Poverty",
  },
  {
    "id" : 101,
    "order" : 101,
    "name" : "General charitable purposes",
    "altName" : "General",
  },
  {
    "id" : 103,
    "order" : 103,
    "name" : "The advancement of health or saving of lives",
    "altName" : "Health",
  },
  {
    "id" : 104,
    "order" : 104,
    "name" : "Disability",
    "altName" : "Disability",
  },
  {
    "id" : 108,
    "order" : 108,
    "name" : "Religious activities",
    "altName" : "Religion",
  },
  {
    "id" : 110,
    "order" : 110,
    "name" : "Amateur sport",
    "altName" : "Sport",
  },
  {
    "id" : 109,
    "order" : 109,
    "name" : "Arts/culture/heritage/science",
    "altName" : "Culture",
  },
  {
    "id" : 107,
    "order" : 107,
    "name" : "Accommodation/housing",
    "altName" : "Housing",
  },
  {
    "id" : 113,
    "order" : 113,
    "name" : "Economic/community development/employment",
    "altName" : "Community",
  },
  {
    "id" : 112,
    "order" : 112,
    "name" : "Environment/conservation/heritage",
    "altName" : "Environment",
  },
  {
    "id" : 115,
    "order" : 115,
    "name" : "Human rights/religious or racial harmony/equality or diversity",
    "altName" : "Human Rights",
  },
  {
    "id" : 116,
    "order" : 116,
    "name" : "Recreation",
    "altName" : "Recreation",
  },
  {
    "id" : 111,
    "order" : 111,
    "name" : "Animals",
    "altName" : "Animals",
  },
  {
    "id" : 117,
    "order" : 117,
    "name" : "Other charitable purposes",
    "altName" : "Other",
  },
  {
    "id" : 106,
    "order" : 106,
    "name" : "Overseas aid/famine relief",
    "altName" : "Aid",
  },
  {
    "id" : 114,
    "order" : 114,
    "name" : "Armed forces/emergency service efficiency",
    "altName" : "Armed Forces",
  }
]

const beneficiaries = [
  {
    "id" : 201,
    "order" : 201,
    "name" : "Children/young people",
    "altName" : "Young",
  },
  {
    "id" : 202,
    "order" : 202,
    "name" : "Elderly/old people",
    "altName" : "Old",
  },
  {
    "id" : 203,
    "order" : 203,
    "name" : "People with disabilities",
    "altName" : "Disabled",
  },
  {
    "id" : 205,
    "order" : 205,
    "name" : "Other charities or voluntary bodies",
    "altName" : "Other Charities",
  },
  {
    "id" : 206,
    "order" : 206,
    "name" : "Other defined groups",
    "altName" : "Other",
  },
  {
    "id" : 207,
    "order" : 207,
    "name" : "The general public/mankind",
    "altName" : "General Public",
  },
  {
    "id" : 204,
    "order" : 204,
    "name" : "People of a particular ethnic or racial origin",
    "altName" : "Particular Ethnicity",
  }
]

const operations = [
  {
    "id" : 301,
    "order" : 301,
    "name" : "Makes grants to individuals",
    "altName" : "Grants to Individuals",
  },
  {
    "id" : 302,
    "order" : 302,
    "name" : "Makes grants to organisations",
    "altName" : "Grants to Organisations",
  },
  {
    "id" : 303,
    "order" : 303,
    "name" : "Provides other finance",
    "altName" : "Other Financial",
  },
  {
    "id" : 307,
    "order" : 307,
    "name" : "Provides advocacy/advice/information",
    "altName" : "Advocacy",
  },
  {
    "id" : 308,
    "order" : 308,
    "name" : "Sponsors or undertakes research",
    "altName" : "Research",
  },
  {
    "id" : 305,
    "order" : 305,
    "name" : "Provides buildings/facilities/open space",
    "altName" : "Facilities",
  },
  {
    "id" : 306,
    "order" : 306,
    "name" : "Provides services",
    "altName" : "Services",
  },
  {
    "id" : 304,
    "order" : 304,
    "name" : "Provides human resources",
    "altName" : "Human Resources",
  },
  {
    "id" : 309,
    "order" : 309,
    "name" : "Acts as an umbrella or resource body",
    "altName" : "Acts as Umbrella Body",
  },
  {
    "id" : 310,
    "order" : 310,
    "name" : "Other charitable activities",
    "altName" : "Other",
  }
]

const grantTopics = []
// const grantTopics = [
//   {
//     "id" : 0,
//     "order" : 0,
//     "name" : "Youth skills",
//     "altName" : "Youth skills",
//   },
//   {
//     "id" : 1,
//     "order" : 14,
//     "name" : "Events",
//     "altName" : "Events",
//   },
//   {
//     "id" : 2,
//     "order" : 2,
//     "name" : "Children learning",
//     "altName" : "Children learning",
//   },
//   {
//     "id" : 3,
//     "order" : 3,
//     "name" : "Sports activities",
//     "altName" : "Sports activities",
//   },
//   {
//     "id" : 4,
//     "order" : 6,
//     "name" : "Core costs",
//     "altName" : "Core costs",
//   },
//   {
//     "id" : 5,
//     "order" : 7,
//     "name" : "Building work",
//     "altName" : "Building work",
//   },
//   {
//     "id" : 6,
//     "order" : 4,
//     "name" : "Art/music/theatre workshops",
//     "altName" : "Art/music/theatre workshops",
//   },
//   {
//     "id" : 7,
//     "order" : 5,
//     "name" : "Outdoor environments",
//     "altName" : "Outdoor environments",
//   },
//   {
//     "id" : 8,
//     "order" : 8,
//     "name" : "Capacity building",
//     "altName" : "Capacity building",
//   },
//   {
//     "id" : 9,
//     "order" : 9,
//     "name" : "Employment skills",
//     "altName" : "Employment skills",
//   },
//   {
//     "id" : 10,
//     "order" : 10,
//     "name" : "Hire/purchase",
//     "altName" : "Hire/purchase",
//   },
//   {
//     "id" : 11,
//     "order" : 11,
//     "name" : "Mental health",
//     "altName" : "Mental health",
//   },
//   {
//     "id" : 12,
//     "order" : 13,
//     "name" : "Isolation",
//     "altName" : "Isolation",
//   },
//   {
//     "id" : 13,
//     "order" : 12,
//     "name" : "Domestic abuse",
//     "altName" : "Domestic abuse",
//   },
//   {
//     "id" : 14,
//     "order" : 1,
//     "name" : "Children play",
//     "altName" : "Children play",
//   },
// ]

const areasOfOperation = [
  { "id": "A-1", "name": "Throughout England And Wales" },
  { "id": "A-2", "name": "Throughout England" },
  { "id": "A-3", "name": "Throughout Wales" },
  { "id": "A-4", "name": "Throughout London" },
  { "id": "B-1", "name": "Bracknell Forest" },
  { "id": "B-2", "name": "West Berkshire" },
  { "id": "B-3", "name": "Reading" },
  { "id": "B-4", "name": "Slough" },
  { "id": "B-5", "name": "Windsor And Maidenhead" },
  { "id": "B-6", "name": "Wokingham" },
  { "id": "B-7", "name": "Barking And Dagenham" },
  { "id": "B-8", "name": "Barnet" },
  { "id": "B-9", "name": "Bexley" },
  { "id": "B-10", "name": "Brent" },
  { "id": "B-11", "name": "Bromley" },
  { "id": "B-12", "name": "Camden" },
  { "id": "B-13", "name": "City Of London" },
  { "id": "B-14", "name": "City Of Westminster" },
  { "id": "B-15", "name": "Croydon" },
  { "id": "B-16", "name": "Ealing" },
  { "id": "B-17", "name": "Enfield" },
  { "id": "B-18", "name": "Greenwich" },
  { "id": "B-19", "name": "Hackney" },
  { "id": "B-20", "name": "Hammersmith And Fulham" },
  { "id": "B-21", "name": "Haringey" },
  { "id": "B-22", "name": "Harrow" },
  { "id": "B-23", "name": "Havering" },
  { "id": "B-24", "name": "Hillingdon" },
  { "id": "B-25", "name": "Hounslow" },
  { "id": "B-26", "name": "Islington" },
  { "id": "B-27", "name": "Kensington And Chelsea" },
  { "id": "B-28", "name": "Kingston Upon Thames" },
  { "id": "B-29", "name": "Lambeth" },
  { "id": "B-30", "name": "Lewisham" },
  { "id": "B-31", "name": "Merton" },
  { "id": "B-32", "name": "Newham" },
  { "id": "B-33", "name": "Redbridge" },
  { "id": "B-34", "name": "Richmond Upon Thames" },
  { "id": "B-35", "name": "Southwark" },
  { "id": "B-36", "name": "Sutton" },
  { "id": "B-37", "name": "Tower Hamlets" },
  { "id": "B-38", "name": "Waltham Forest" },
  { "id": "B-39", "name": "Wandsworth" },
  { "id": "B-40", "name": "Bolton" },
  { "id": "B-41", "name": "Bury" },
  { "id": "B-42", "name": "Manchester City" },
  { "id": "B-43", "name": "Oldham" },
  { "id": "B-44", "name": "Rochdale" },
  { "id": "B-45", "name": "Salford City" },
  { "id": "B-46", "name": "Stockport" },
  { "id": "B-47", "name": "Tameside" },
  { "id": "B-48", "name": "Trafford" },
  { "id": "B-49", "name": "Wigan" },
  { "id": "B-50", "name": "Knowsley" },
  { "id": "B-51", "name": "Liverpool City" },
  { "id": "B-52", "name": "Sefton" },
  { "id": "B-53", "name": "St Helens" },
  { "id": "B-54", "name": "Wirral" },
  { "id": "B-55", "name": "Barnsley" },
  { "id": "B-56", "name": "Doncaster" },
  { "id": "B-57", "name": "Rotherham" },
  { "id": "B-58", "name": "Sheffield City" },
  { "id": "B-59", "name": "Gateshead" },
  { "id": "B-60", "name": "Newcastle Upon Tyne City" },
  { "id": "B-61", "name": "North Tyneside" },
  { "id": "B-62", "name": "South Tyneside" },
  { "id": "B-63", "name": "Sunderland" },
  { "id": "B-64", "name": "Birmingham City" },
  { "id": "B-65", "name": "Coventry City" },
  { "id": "B-66", "name": "Dudley" },
  { "id": "B-67", "name": "Sandwell" },
  { "id": "B-68", "name": "Solihull" },
  { "id": "B-69", "name": "Walsall" },
  { "id": "B-70", "name": "Wolverhampton" },
  { "id": "B-71", "name": "Bradford City" },
  { "id": "B-72", "name": "Calderdale" },
  { "id": "B-73", "name": "Kirklees" },
  { "id": "B-74", "name": "Leeds City" },
  { "id": "B-75", "name": "City Of Wakefield" },
  { "id": "B-76", "name": "Nottingham City" },
  { "id": "B-101", "name": "Central Bedfordshire" },
  { "id": "B-102", "name": "Buckinghamshire" },
  { "id": "B-103", "name": "Cambridgeshire" },
  { "id": "B-104", "name": "Cheshire East" },
  { "id": "B-105", "name": "Cornwall" },
  { "id": "B-106", "name": "Cumbria" },
  { "id": "B-107", "name": "Derbyshire" },
  { "id": "B-108", "name": "Devon" },
  { "id": "B-109", "name": "Dorset" },
  { "id": "B-110", "name": "Durham" },
  { "id": "B-111", "name": "East Sussex" },
  { "id": "B-112", "name": "Essex" },
  { "id": "B-113", "name": "Gloucestershire" },
  { "id": "B-114", "name": "Hampshire" },
  { "id": "B-115", "name": "Hertfordshire" },
  { "id": "B-116", "name": "Isle Of Wight" },
  { "id": "B-117", "name": "Kent" },
  { "id": "B-118", "name": "Lancashire" },
  { "id": "B-119", "name": "Leicestershire" },
  { "id": "B-120", "name": "Lincolnshire" },
  { "id": "B-121", "name": "Norfolk" },
  { "id": "B-122", "name": "North Yorkshire" },
  { "id": "B-123", "name": "Northamptonshire" },
  { "id": "B-124", "name": "Northumberland" },
  { "id": "B-125", "name": "Nottinghamshire" },
  { "id": "B-126", "name": "Oxfordshire" },
  { "id": "B-127", "name": "Powys" },
  { "id": "B-128", "name": "Shropshire" },
  { "id": "B-129", "name": "Somerset" },
  { "id": "B-130", "name": "Staffordshire" },
  { "id": "B-131", "name": "Suffolk" },
  { "id": "B-132", "name": "Surrey" },
  { "id": "B-133", "name": "Warwickshire" },
  { "id": "B-134", "name": "West Sussex" },
  { "id": "B-135", "name": "Wiltshire" },
  { "id": "B-136", "name": "North Somerset" },
  { "id": "B-137", "name": "Bath And North East Somerset" },
  { "id": "B-138", "name": "South Gloucestershire" },
  { "id": "B-139", "name": "Bristol City" },
  { "id": "B-140", "name": "Hartlepool" },
  { "id": "B-141", "name": "Middlesbrough" },
  { "id": "B-142", "name": "Redcar And Cleveland" },
  { "id": "B-143", "name": "Stockton-On-Tees" },
  { "id": "B-144", "name": "Kingston Upon Hull City" },
  { "id": "B-145", "name": "North Lincolnshire" },
  { "id": "B-146", "name": "North East Lincolnshire" },
  { "id": "B-147", "name": "East Riding Of Yorkshire" },
  { "id": "B-148", "name": "Conwy" },
  { "id": "B-149", "name": "Isle Of Anglesey" },
  { "id": "B-150", "name": "Blaenau Gwent" },
  { "id": "B-151", "name": "Bridgend" },
  { "id": "B-152", "name": "Caerphilly" },
  { "id": "B-153", "name": "Cardiff" },
  { "id": "B-154", "name": "Ceredigion" },
  { "id": "B-155", "name": "Carmarthenshire" },
  { "id": "B-156", "name": "Denbighshire" },
  { "id": "B-157", "name": "Flintshire" },
  { "id": "B-158", "name": "Merthyr Tydfil" },
  { "id": "B-159", "name": "Monmouthshire" },
  { "id": "B-160", "name": "Neath Port Talbot" },
  { "id": "B-161", "name": "Newport City" },
  { "id": "B-162", "name": "Pembrokeshire" },
  { "id": "B-163", "name": "Plymouth City" },
  { "id": "B-164", "name": "City Of Swansea" },
  { "id": "B-165", "name": "Vale Of Glamorgan" },
  { "id": "B-166", "name": "Thurrock" },
  { "id": "B-167", "name": "Wrexham" },
  { "id": "B-168", "name": "Halton" },
  { "id": "B-169", "name": "Gwynedd" },
  { "id": "B-170", "name": "City Of York" },
  { "id": "B-171", "name": "Torfaen" },
  { "id": "B-172", "name": "Warrington" },
  { "id": "B-173", "name": "Rhondda Cynon Taff" },
  { "id": "B-174", "name": "Luton" },
  { "id": "B-175", "name": "Milton Keynes" },
  { "id": "B-176", "name": "Derby City" },
  { "id": "B-177", "name": "Bournemouth" },
  { "id": "B-178", "name": "Poole" },
  { "id": "B-179", "name": "Darlington" },
  { "id": "B-180", "name": "Brighton And Hove" },
  { "id": "B-181", "name": "Southampton City" },
  { "id": "B-182", "name": "Portsmouth City" },
  { "id": "B-183", "name": "Leicester City" },
  { "id": "B-184", "name": "Rutland" },
  { "id": "B-185", "name": "Stoke-On-Trent City" },
  { "id": "B-186", "name": "Swindon" },
  { "id": "B-187", "name": "Blackburn With Darwen" },
  { "id": "B-188", "name": "Blackpool" },
  { "id": "B-189", "name": "Southend-On-Sea" },
  { "id": "B-190", "name": "Telford & Wrekin" },
  { "id": "B-191", "name": "Peterborough City" },
  { "id": "B-192", "name": "Herefordshire" },
  { "id": "B-193", "name": "Worcestershire" },
  { "id": "B-194", "name": "Medway" },
  { "id": "B-195", "name": "Isles Of Scilly" },
  { "id": "B-196", "name": "Torbay" },
  { "id": "B-197", "name": "Cheshire West & Chester" },
  { "id": "B-198", "name": "Bedford" },
  { "id": "D-1", "name": "Afghanistan" },
  { "id": "D-2", "name": "Albania" },
  { "id": "D-3", "name": "Algeria" },
  { "id": "D-5", "name": "Andorra" },
  { "id": "D-6", "name": "Angola" },
  { "id": "D-9", "name": "Antigua And Barbuda" },
  { "id": "D-10", "name": "Argentina" },
  { "id": "D-11", "name": "Armenia" },
  { "id": "D-13", "name": "Australia" },
  { "id": "D-14", "name": "Austria" },
  { "id": "D-15", "name": "Azerbaijan" },
  { "id": "D-17", "name": "Bahamas" },
  { "id": "D-18", "name": "Bahrain" },
  { "id": "D-19", "name": "Bangladesh" },
  { "id": "D-20", "name": "Barbados" },
  { "id": "D-21", "name": "Belarus" },
  { "id": "D-22", "name": "Belgium" },
  { "id": "D-23", "name": "Belize" },
  { "id": "D-24", "name": "Benin" },
  { "id": "D-26", "name": "Bhutan" },
  { "id": "D-27", "name": "Bolivia" },
  { "id": "D-28", "name": "Bosnia And Herzegovina" },
  { "id": "D-29", "name": "Botswana" },
  { "id": "D-30", "name": "Brazil" },
  { "id": "D-31", "name": "Brunei" },
  { "id": "D-32", "name": "Bulgaria" },
  { "id": "D-33", "name": "Burkina Faso" },
  { "id": "D-34", "name": "Burundi" },
  { "id": "D-35", "name": "Cambodia" },
  { "id": "D-36", "name": "Cameroon" },
  { "id": "D-37", "name": "Canada" },
  { "id": "D-38", "name": "Cape Verde" },
  { "id": "D-40", "name": "Central African Republic" },
  { "id": "D-41", "name": "Chad" },
  { "id": "D-42", "name": "Chile" },
  { "id": "D-43", "name": "China" },
  { "id": "D-44", "name": "Colombia" },
  { "id": "D-45", "name": "Comoros" },
  { "id": "D-46", "name": "Congo" },
  { "id": "D-48", "name": "Costa Rica" },
  { "id": "D-49", "name": "Croatia" },
  { "id": "D-50", "name": "Cuba" },
  { "id": "D-51", "name": "Cyprus" },
  { "id": "D-52", "name": "Czech Republic" },
  { "id": "D-53", "name": "Denmark" },
  { "id": "D-54", "name": "Djibouti" },
  { "id": "D-55", "name": "Dominica" },
  { "id": "D-56", "name": "Dominican Republic" },
  { "id": "D-57", "name": "Ecuador" },
  { "id": "D-58", "name": "Egypt" },
  { "id": "D-59", "name": "El Salvador" },
  { "id": "D-60", "name": "Equatorial Guinea" },
  { "id": "D-61", "name": "Eritrea" },
  { "id": "D-62", "name": "Estonia" },
  { "id": "D-63", "name": "Ethiopia" },
  { "id": "D-66", "name": "Fiji" },
  { "id": "D-67", "name": "Finland" },
  { "id": "D-68", "name": "France" },
  { "id": "D-71", "name": "Gabon" },
  { "id": "D-72", "name": "The Gambia" },
  { "id": "D-74", "name": "Georgia" },
  { "id": "D-75", "name": "Germany" },
  { "id": "D-76", "name": "Ghana" },
  { "id": "D-78", "name": "Greece" },
  { "id": "D-80", "name": "Grenada" },
  { "id": "D-83", "name": "Guatemala" },
  { "id": "D-85", "name": "Guinea" },
  { "id": "D-86", "name": "Guinea-Bissau" },
  { "id": "D-87", "name": "Guyana" },
  { "id": "D-88", "name": "Haiti" },
  { "id": "D-89", "name": "Honduras" },
  { "id": "D-91", "name": "Hungary" },
  { "id": "D-92", "name": "Iceland" },
  { "id": "D-93", "name": "India" },
  { "id": "D-94", "name": "Indonesia" },
  { "id": "D-95", "name": "Iran" },
  { "id": "D-96", "name": "Iraq" },
  { "id": "D-97", "name": "Israel" },
  { "id": "D-98", "name": "Italy" },
  { "id": "D-99", "name": "Ivory Coast" },
  { "id": "D-100", "name": "Jamaica" },
  { "id": "D-101", "name": "Japan" },
  { "id": "D-103", "name": "Jordan" },
  { "id": "D-104", "name": "Kazakhstan" },
  { "id": "D-105", "name": "Kenya" },
  { "id": "D-106", "name": "Kiribati" },
  { "id": "D-107", "name": "Kuwait" },
  { "id": "D-108", "name": "Kyrgyzstan" },
  { "id": "D-109", "name": "Laos" },
  { "id": "D-110", "name": "Latvia" },
  { "id": "D-111", "name": "Lebanon" },
  { "id": "D-112", "name": "Lesotho" },
  { "id": "D-113", "name": "Liberia" },
  { "id": "D-114", "name": "Libya" },
  { "id": "D-115", "name": "Liechtenstein" },
  { "id": "D-116", "name": "Lithuania" },
  { "id": "D-117", "name": "Luxembourg" },
  { "id": "D-119", "name": "Macedonia" },
  { "id": "D-120", "name": "Madagascar" },
  { "id": "D-122", "name": "Malawi" },
  { "id": "D-123", "name": "Malaysia" },
  { "id": "D-124", "name": "Maldives" },
  { "id": "D-125", "name": "Mali" },
  { "id": "D-126", "name": "Malta" },
  { "id": "D-127", "name": "Marshall Islands" },
  { "id": "D-129", "name": "Mauritania" },
  { "id": "D-130", "name": "Mauritius" },
  { "id": "D-132", "name": "Mexico" },
  { "id": "D-133", "name": "Micronesia" },
  { "id": "D-134", "name": "Moldova" },
  { "id": "D-135", "name": "Monaco" },
  { "id": "D-136", "name": "Mongolia" },
  { "id": "D-138", "name": "Morocco" },
  { "id": "D-139", "name": "Mozambique" },
  { "id": "D-140", "name": "Burma" },
  { "id": "D-141", "name": "Namibia" },
  { "id": "D-142", "name": "Nauru" },
  { "id": "D-143", "name": "Nepal" },
  { "id": "D-144", "name": "Netherlands" },
  { "id": "D-147", "name": "New Zealand" },
  { "id": "D-148", "name": "Nicaragua" },
  { "id": "D-149", "name": "Niger" },
  { "id": "D-150", "name": "Nigeria" },
  { "id": "D-152", "name": "North Korea" },
  { "id": "D-154", "name": "Norway" },
  { "id": "D-155", "name": "Oman" },
  { "id": "D-156", "name": "Pakistan" },
  { "id": "D-157", "name": "Palau" },
  { "id": "D-159", "name": "Panama" },
  { "id": "D-160", "name": "Papua New Guinea" },
  { "id": "D-161", "name": "Paraguay" },
  { "id": "D-162", "name": "Peru" },
  { "id": "D-163", "name": "Philippines" },
  { "id": "D-164", "name": "Poland" },
  { "id": "D-165", "name": "Portugal" },
  { "id": "D-167", "name": "Qatar" },
  { "id": "D-168", "name": "Ireland" },
  { "id": "D-170", "name": "Romania" },
  { "id": "D-171", "name": "Russia" },
  { "id": "D-172", "name": "Rwanda" },
  { "id": "D-174", "name": "St Kitts-Nevis" },
  { "id": "D-175", "name": "St Lucia" },
  { "id": "D-176", "name": "St Vincent And Grenadines" },
  { "id": "D-177", "name": "Samoa" },
  { "id": "D-178", "name": "San Marino" },
  { "id": "D-179", "name": "Sao Tome And Principe" },
  { "id": "D-180", "name": "Saudi Arabia" },
  { "id": "D-181", "name": "Senegal" },
  { "id": "D-182", "name": "Seychelles" },
  { "id": "D-183", "name": "Sierra Leone" },
  { "id": "D-184", "name": "Singapore" },
  { "id": "D-185", "name": "Slovakia" },
  { "id": "D-186", "name": "Slovenia" },
  { "id": "D-187", "name": "Solomon Islands" },
  { "id": "D-188", "name": "Somalia" },
  { "id": "D-189", "name": "South Africa" },
  { "id": "D-190", "name": "South Korea" },
  { "id": "D-191", "name": "Spain" },
  { "id": "D-192", "name": "Sri Lanka" },
  { "id": "D-193", "name": "Sudan" },
  { "id": "D-194", "name": "Surinam" },
  { "id": "D-195", "name": "Swaziland" },
  { "id": "D-196", "name": "Sweden" },
  { "id": "D-197", "name": "Switzerland" },
  { "id": "D-198", "name": "Syria" },
  { "id": "D-200", "name": "Tajikistan" },
  { "id": "D-201", "name": "Tanzania" },
  { "id": "D-202", "name": "Thailand" },
  { "id": "D-204", "name": "Togo" },
  { "id": "D-205", "name": "Tonga" },
  { "id": "D-206", "name": "Trinidad And Tobago" },
  { "id": "D-207", "name": "Tunisia" },
  { "id": "D-208", "name": "Turkey" },
  { "id": "D-209", "name": "Turkmenistan" },
  { "id": "D-211", "name": "Tuvalu" },
  { "id": "D-212", "name": "Uganda" },
  { "id": "D-213", "name": "Ukraine" },
  { "id": "D-214", "name": "United Arab Emirates" },
  { "id": "D-216", "name": "United States" },
  { "id": "D-217", "name": "Uruguay" },
  { "id": "D-218", "name": "Uzbekistan" },
  { "id": "D-219", "name": "Vanuatu" },
  { "id": "D-221", "name": "Venezuela" },
  { "id": "D-222", "name": "Vietnam" },
  { "id": "D-224", "name": "Yemen" },
  { "id": "D-225", "name": "Serbia" },
  { "id": "D-226", "name": "Democratic Republic Of The Congo" },
  { "id": "D-227", "name": "Zambia" },
  { "id": "D-228", "name": "Zimbabwe" },
  { "id": "D-233", "name": "Montenegro" },
  { "id": "D-234", "name": "Scotland" },
  { "id": "D-235", "name": "Northern Ireland" },
  { "id": "D-236", "name": "Antarctica" },
  { "id": "D-237", "name": "Timor-Leste" },
  { "id": "D-238", "name": "Occupied Palestinian Territories" },
  { "id": "D-239", "name": "Kosovo" },
  { "id": "D-240", "name": "Akrotiri And Dhekelia" },
  { "id": "D-241", "name": "American Samoa" },
  { "id": "D-242", "name": "Anguilla" },
  { "id": "D-243", "name": "Aruba" },
  { "id": "D-244", "name": "Bermuda" },
  { "id": "D-245", "name": "British Indian Ocean Territory" },
  { "id": "D-246", "name": "British Virgin Islands" },
  { "id": "D-247", "name": "Cayman Islands" },
  { "id": "D-248", "name": "Christmas Island" },
  { "id": "D-249", "name": "Clipperton Island" },
  { "id": "D-250", "name": "Cocos (Keeling) Islands" },
  { "id": "D-251", "name": "Cook Islands" },
  { "id": "D-252", "name": "Easter  Island" },
  { "id": "D-253", "name": "Falkland Islands" },
  { "id": "D-254", "name": "Faroe Islands" },
  { "id": "D-255", "name": "French Guyana" },
  { "id": "D-256", "name": "French Polynesia" },
  { "id": "D-257", "name": "Gibraltar" },
  { "id": "D-258", "name": "Greenland" },
  { "id": "D-259", "name": "Guadeloupe" },
  { "id": "D-260", "name": "Guam" },
  { "id": "D-261", "name": "Guernsey" },
  { "id": "D-262", "name": "Hong Kong" },
  { "id": "D-263", "name": "Isle Of Man" },
  { "id": "D-264", "name": "Jan Mayen" },
  { "id": "D-265", "name": "Jersey" },
  { "id": "D-266", "name": "Juan Fernandez Islands" },
  { "id": "D-267", "name": "Macau" },
  { "id": "D-268", "name": "Martinique" },
  { "id": "D-269", "name": "Mayotte" },
  { "id": "D-270", "name": "Montserrat" },
  { "id": "D-271", "name": "Netherlands Antilles" },
  { "id": "D-272", "name": "New Caledonia" },
  { "id": "D-273", "name": "Niue" },
  { "id": "D-274", "name": "Norfolk Island" },
  { "id": "D-275", "name": "Northern Mariana Island" },
  { "id": "D-276", "name": "Pitcairn Islands" },
  { "id": "D-277", "name": "Puerto Rico" },
  { "id": "D-278", "name": "Reunion" },
  { "id": "D-279", "name": "Ross Dependency" },
  { "id": "D-280", "name": "St Barthelemy" },
  { "id": "D-281", "name": "St Helena" },
  { "id": "D-282", "name": "St Martin" },
  { "id": "D-283", "name": "St Pierre And Miquelon" },
  { "id": "D-284", "name": "South Georgia" },
  { "id": "D-285", "name": "Svalbard" },
  { "id": "D-286", "name": "Taiwan" },
  { "id": "D-287", "name": "Tokelau" },
  { "id": "D-288", "name": "Turks And Caicos Islands" },
  { "id": "D-289", "name": "U.S. Virgin Islands" },
  { "id": "D-290", "name": "Wallis And Futuna" },
  { "id": "D-293", "name": "Republic Of South Sudan" }
]

const funders = [
  {
    "id" : "GB-CHC-1000147",
    "name" : "A B Charitable Trust"
  },
  {
    "id" : "GB-CHC-1115476",
    "name" : "Barrow Cadbury Trust"
  },
  {
    "id" : "GB-CHC-802052",
    "name" : "BBC Children in Need"
  },
  {
    "id" : "360G-blf",
    "name" : "The Big Lottery Fund"
  },
  {
    "id" : "GB-LAE-BIR",
    "name" : "Birmingham City Council"
  },
  {
    "id" : "GB-CHC-1164021",
    "name" : "The Blagrave Trust"
  },
  {
    "id" : "360G-Gulbenkian",
    "name" : "Calouste Gulbenkian Foundation, UK Branch"
  },
  {
    "id" : "GB-CHC-1143711",
    "name" : "Cheshire Community Foundation"
  },
  {
    "id" : "GB-CHC-1035628",
    "name" : "City Bridge Trust"
  },
  {
    "id" : "GB-CHC-274100",
    "name" : "The Clothworkers Foundation"
  },
  {
    "id" : "GB-CHC-205959",
    "name" : "Cloudesley"
  },
  {
    "id" : "GB-COH-IP00525R",
    "name" : "Co-operative Group"
  },
  {
    "id" : "GB-CHC-326568 ",
    "name" : "Comic Relief"
  },
  {
    "id" : "GB-CHC-1111600",
    "name" : "Community Foundation for Surrey"
  },
  {
    "id" : "GB-COH-02273708",
    "name" : "Community Foundation serving Tyne & Wear and Northumberland"
  },
  {
    "id" : "GB-CHC-1093028",
    "name" : "Coop Foundation"
  },
  {
    "id" : "GB-SC-SC009481",
    "name" : "Corra Foundation"
  },
  {
    "id" : "GB-CHC-309671",
    "name" : "Culham St Gabriel's Trust"
  },
  {
    "id" : "GB-CHC-1078217",
    "name" : "The David & Elaine Potter Foundation"
  },
  {
    "id" : "GB-GOR-D9",
    "name" : "Department for Transport"
  },
  {
    "id" : "GB-CHC-1057923",
    "name" : "Devon Community Foundation"
  },
  {
    "id" : "GB-COH-07991677",
    "name" : "The Dulverton Trust"
  },
  {
    "id" : "GB-LAS-DND",
    "name" : "Dundee City Council"
  },
  {
    "id" : "GB-CHC-1140372",
    "name" : "The Dunhill Medical Trust"
  },
  {
    "id" : "GB-CHC-200051",
    "name" : "Esmée Fairbairn Foundation"
  },
  {
    "id" : "GB-CHC-1052061",
    "name" : "Essex Community Foundation"
  },
  {
    "id" : "GB-CHC-1123081",
    "name" : "The Fore"
  },
  {
    "id" : "GB-CHC-230260",
    "name" : "Garfield Weston Foundation"
  },
  {
    "id" : "GB-CHC-251988",
    "name" : "Gatsby Charitable Foundation"
  },
  {
    "id" : "GB-LAS-GLG",
    "name" : "Glasgow City Council"
  },
  {
    "id" : "GB-LAE-GLA",
    "name" : "Greater London Authority"
  },
  {
    "id" : "GB-COH-03340350",
    "name" : "Greenham Common Trust"
  },
  {
    "id" : "GB-CHC-1160316",
    "name" : "Guy's and St Thomas' Charity"
  },
  {
    "id" : "GB-CHC-1045304",
    "name" : "Heart Of England Community Foundation"
  },
  {
    "id" : "GB-CHC-230102",
    "name" : "The Henry Smith Charity "
  },
  {
    "id" : "GB-CHC-1075920",
    "name" : "Indigo Trust"
  },
  {
    "id" : "GB-CHC-253481",
    "name" : "John Moores Foundation"
  },
  {
    "id" : "GB-CHC-1093844",
    "name" : "The Joseph Rank Trust"
  },
  {
    "id" : "GB-CHC-210037",
    "name" : "Joseph Rowntree Charitable Trust"
  },
  {
    "id" : "GB-CHC-210169",
    "name" : "Joseph Rowntree Foundation"
  },
  {
    "id" : "GB-CHC-1111360",
    "name" : "Kingston Voluntary Action"
  },
  {
    "id" : "GB-CHC-295157",
    "name" : "LandAid Charitable Trust"
  },
  {
    "id" : "GB-CHC-1107583",
    "name" : "Lankelly Chase Foundation"
  },
  {
    "id" : "GB-CHC-1145988",
    "name" : "Lloyd's Register Foundation"
  },
  {
    "id" : "GB-CHC-327114",
    "name" : "Lloyds Bank Foundation for England and Wales"
  },
  {
    "id" : "GB-CHC-1147511",
    "name" : "Local Trust"
  },
  {
    "id" : "GB-LAE-BNE",
    "name" : "London Borough of Barnet"
  },
  {
    "id" : "GB-LAE-SWK",
    "name" : "London Borough of Southwark"
  },
  {
    "id" : "GB-CHC-1066739",
    "name" : "London Catalyst"
  },
  {
    "id" : "GB-COH-03037449",
    "name" : "London Councils"
  },
  {
    "id" : "360G-ArcadiaFund",
    "name" : "ARCADIA"
  },
  {
    "id" : "GB-CHC-1145921",
    "name" : "Macc"
  },
  {
    "id" : "GB-CHC-1164703",
    "name" : "Masonic Charitable Foundation"
  },
  {
    "id" : "GB-CHC-1158914",
    "name" : "Millfield House Foundation"
  },
  {
    "id" : "GB-GOR-D18",
    "name" : "Ministry of Justice"
  },
  {
    "id" : "GB-CHC-1119845",
    "name" : "National Churches Trust"
  },
  {
    "id" : "GB-CHC-1065552",
    "name" : "Nationwide Foundation"
  },
  {
    "id" : "GB-CHC-1144091",
    "name" : "Nesta"
  },
  {
    "id" : "GB-COH-03416658",
    "name" : "Northern Rock Foundation"
  },
  {
    "id" : "GB-COH-RS007018",
    "name" : "One Manchester"
  },
  {
    "id" : "GB-LAE-OXO",
    "name" : "Oxford City Council"
  },
  {
    "id" : "GB-CHC-1151621",
    "name" : "Oxfordshire Community Foundation"
  },
  {
    "id" : "GB-CHC-1102927",
    "name" : "Paul Hamlyn Foundation"
  },
  {
    "id" : "GB-CHC-1009195",
    "name" : "Pears Foundation"
  },
  {
    "id" : "GB-CHC-1159982",
    "name" : "Power to Change "
  },
  {
    "id" : "GB-CHC-1080418",
    "name" : "Quartet Community Foundation"
  },
  {
    "id" : "US-EIN-39-1916960",
    "name" : "Quixote Foundation"
  },
  {
    "id" : "GB-SC-SC012710",
    "name" : "R S Macdonald Charitable Trust"
  },
  {
    "id" : "GB-CHC-1156300",
    "name" : "Road Safety Trust"
  },
  {
    "id" : "GB-SC-SC002970",
    "name" : "The Robertson Trust"
  },
  {
    "id" : "GB-CHC-265647",
    "name" : "Samworth Foundation"
  },
  {
    "id" : "GB-SC-SC003558",
    "name" : "Scottish Council For Voluntary Organisations"
  },
  {
    "id" : "GB-CHC-226446",
    "name" : "Seafarers UK"
  },
  {
    "id" : "GB-COH-04530979",
    "name" : "Somerset Community Foundation"
  },
  {
    "id" : "GB-COH-RC000766",
    "name" : "Sport England"
  },
  {
    "id" : "GB-CHC-1010656",
    "name" : "Staples Trust"
  },
  {
    "id" : "GB-LAE-SKP",
    "name" : "Stockport MBC"
  },
  {
    "id" : "GB-CHC-1113226",
    "name" : "Sussex Community Foundation"
  },
  {
    "id" : "GB-CHC-328524",
    "name" : "Tedworth Charitable Trust"
  },
  {
    "id" : "GB-CHC-1059652",
    "name" : "Three Guineas Trust"
  },
  {
    "id" : "GB-COH-04831118",
    "name" : "Trafford Housing Trust Social Investment"
  },
  {
    "id" : "GB-LAE-TRF",
    "name" : "Trafford Metropolitan Borough Council"
  },
  {
    "id" : "GB-CHC-1089893",
    "name" : "True Colours Trust"
  },
  {
    "id" : "GB-CHC-205629",
    "name" : "Trust for London"
  },
  {
    "id" : "GB-CHC-1105580",
    "name" : "The Tudor Trust"
  },
  {
    "id" : "GB-CHC-1081124",
    "name" : "Tuixen Foundation"
  },
  {
    "id" : "GB-CHC-1166471",
    "name" : "Two Ridings Community Foundation"
  },
  {
    "id" : "GB-CHC-1103731",
    "name" : "United St Saviour's Charity"
  },
  {
    "id" : "GB-CHC-1161290",
    "name" : "Virgin Money Foundation"
  },
  {
    "id" : "GB-CHC-312800",
    "name" : "Walcot Foundation"
  },
  {
    "id" : "GB-CHC-1126007",
    "name" : "Wates Family Enterprise Trust"
  },
  {
    "id" : "GB-CHC-247941",
    "name" : "Wates Foundation"
  },
  {
    "id" : "GB-CHC-210183",
    "name" : "The Wellcome Trust"
  },
  {
    "id" : "GB-CHC-1123126",
    "name" : "Wiltshire Community Foundation"
  },
  {
    "id" : "GB-CHC-1156077",
    "name" : "Wolfson Foundation"
  },
  {
    "id" : "GB-CHC-299963",
    "name" : "Woodward Charitable Trust"
  },
  {
    "id" : "GB-CHC-1133342",
    "name" : "ZING"
  }
]

export {
  areasOfOperation,
  causes,
  beneficiaries,
  operations,
  funders,
  grantTopics,
}
