const defaultFieldsList = [
  'ids.GB-CHC',
  'name',
]

const allowedFields = [
  {
    title: 'IDs',
    key: 'ids',
    children: [{
      title: 'CC Number',
      key: 'ids.GB-CHC',
      disabled: true,
    }, {
      title: 'General ID',
      key: 'ids.charityId',
      disabled: false,
    }],
    disabled: true,
  }, {
    title: 'Name',
    key: 'name',
    disabled: true,
  }, {
    title: 'Contact',
    key: 'contact',
    children: [{
      title: 'Address',
      key: 'contact.address',
    }, {
      title: 'Email',
      key: 'contact.email',
    }, {
      title: 'Latitude',
      key: 'contact.geo.latitude',
    }, {
      title: 'Longitude',
      key: 'contact.geo.longitude',
    }, {
      title: 'Person',
      key: 'contact.person',
    }, {
      title: 'Phone',
      key: 'contact.phone',
    }, {
      title: 'Postcode',
      key: 'contact.postcode',
    }],
  }, {
    title: 'People',
    key: 'people',
    children: [{
      title: 'Number Volunteers',
      key: 'people.volunteers',
    }, {
      title: 'Number Employees',
      key: 'people.employees',
    }, {
      title: 'Number Trustees',
      key: 'people.trustees',
    }]
  }, {
    title: 'Activities',
    key: 'activities',
  }, {
    title: 'Website',
    key: 'website',
  }, {
    title: 'Annual Income/Expenditure 2008-2018',
    key: 'income.annual',
  }, {
    title: 'Area of Benefit',
    key: 'areaOfBenefit',
  }, {
    title: 'Causes',
    key: 'causes',
  }, {
    title: 'Beneficiaries',
    key: 'beneficiaries',
  }, {
    title: 'Operations',
    key: 'operations',
  }, {
    title: 'Objectives',
    key: 'objectives',
  }, {
    title: 'Registration Date',
    key: 'registration',
  },
]

export { defaultFieldsList, allowedFields }
