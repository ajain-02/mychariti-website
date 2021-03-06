import React, { Fragment, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import numeral from "numeral";
import { Link } from "react-router-dom";
import { Avatar, Button, List } from "antd";
import { Query } from "react-apollo";
import { LIST_CHARITIES } from "../../../lib/gql";
import { CenteredContent, ResponsiveScroll } from "../../general/Layout";
import ListHeader from "./ListHeader";
import file from "../../../utils/file.json";
import getProfilePic from "./getProfilePic";
import CharityItem from "./CharityItem";
const MAX_LIST_LENGTH = 500;

const IncomeIcon = ({ income, id }) => {
  let charitySocial = file.find((obj) => obj["Charity ID"] === id);
  let twitterName = "";

  if (charitySocial !== undefined && charitySocial !== null) {
    if ("Twitter" in charitySocial) {
      twitterName = file.find((obj) => obj["Charity ID"] === id)["Twitter"];
    }
  }

  getProfilePic();
  // console.log(id,twitterName,)

  return (
    <div>
      <img
        src={"https://unavatar.now.sh/twitter/" + twitterName}
        width="100"
        height="50"
      />
    </div>
  );
};

// <svg style={{ width: "50px", height: "50px" }}>
//   <img src="https://unavatar.now.sh/twitter/jack"  width="100" height="50" />
//   <p>dgfd</p>

//   <circle cx="25px" cy="25px" fill="#EEE" r={2 * Math.log10(income || 1)} />
//   <line
//     stroke="#EEE"
//     strokeWidth="1"
//     x1="0px"
//     x2="25px"
//     y1="25px"
//     y2="25px"
//   />
// </svg>
IncomeIcon.propTypes = {
  income: PropTypes.number,
};

const IncomeLabel = styled.span`
  height: 50px;
  line-height: 50px;
  vertical-align: top;
  font-size: 16px;
  margin-right: 5px;
  letter-spacing: 1px;
`;

const Income = ({ income, id }) => (
  <div>
    <IncomeLabel>
      {numeral(income).format("($0a)").replace("$", "£")}
    </IncomeLabel>

    <IncomeIcon id={id} type="pay-circle" income={income} />
  </div>
);

const LoadMore = ({ loading, error, data, fetchMore }) => {
  if (loading || error) return null;
  const dataLength = data.CHC ? data.CHC.getCharities.list.length : 0;
  if (dataLength === 0) return null;
  const count = data.CHC ? data.CHC.getCharities.count : 0;
  if (dataLength >= count) {
    return <div className="load-more-container">End of Results</div>;
  }
  if (dataLength > MAX_LIST_LENGTH) {
    return (
      <div className="load-more-container">
        Gosh you're persistent. Please download the results or apply more
        filters to find what you're looking for.
      </div>
    );
  }
  return (
    <div className="load-more-container">
      <Button
        onClick={() =>
          fetchMore({
            variables: {
              skip: dataLength,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              return {
                ...prev,
                CHC: {
                  ...prev.CHC,
                  getCharities: {
                    ...prev.CHC.getCharities,
                    list: [
                      ...prev.CHC.getCharities.list,
                      ...fetchMoreResult.CHC.getCharities.list,
                    ],
                  },
                },
              };
            },
          })
        }
      >
        Show More
      </Button>
    </div>
  );
};
LoadMore.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  data: PropTypes.object.isRequired,
  fetchMore: PropTypes.func.isRequired,
};

const CharitiesList = ({ onHover, filtersObj }) => {
  const [sort, setSort] = useState("default");
  return (
    <Query
      query={LIST_CHARITIES}
      variables={{ filters: filtersObj, skip: 0, sort }}
      notifyOnNetworkStatusChange={true}
    >
      {({ loading, error, data, fetchMore }) => {
        if (error) return "error oops";
        return (
          <Fragment>
            <ResponsiveScroll>
              <ListHeader
                loading={loading}
                count={data.CHC ? data.CHC.getCharities.count : null}
                sort={sort}
                setSort={setSort}
              />
              <CenteredContent>
                <List
                  size="large"
                  itemLayout="vertical"
                  loading={loading}
                  loadMore={
                    <LoadMore
                      loading={loading}
                      error={error}
                      data={data}
                      fetchMore={fetchMore}
                    />
                  }
                  locale={{ emptyText: "No Charities Found" }}
                  dataSource={data.CHC ? data.CHC.getCharities.list : []}
                  bordered
                  renderItem={({ id, names, activities, geo, finances }) => (
                    <List.Item
                      actions={
                        [
                          // <Link to={`/charities/${ids['GB-CHC']}?view=contact`}><Icon type="phone" /></Link>,
                          // <Link to={`/charities/${ids['GB-CHC']}?view=people`}><Icon type="team" /></Link>,
                          // <Link to={`/charities/${ids['GB-CHC']}?view=places`}><Icon type="global" /></Link>,
                        ]
                      }
                      onMouseEnter={() => onHover(geo)}
                      onMouseLeave={() => onHover({})}
                    >
                      {/* <List.Item.Meta
                        // avatar={
                        //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        // }
                        // title={<a href="https://ant.design">{"dfs"}</a>}
                        // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        title={
                          <Link to={`/chc/${id}`}>
                            {names &&
                              names.reduce(
                                (agg, x) => (x.primary ? x.value : agg),
                                null
                              )}{" "}
                            <Income
                              income={
                                finances && finances.length > 0
                                  ? finances[0].income
                                  : null
                              }
                              id={id}
                            />
                          </Link>
                        }
                        description={
                          names &&
                          names
                            .reduce(
                              (agg, x) => (x.primary ? agg : [...agg, x.value]),
                              []
                            )
                            .join(", ")
                        }
                      />
                      {activities && `${activities.slice(0, 120)}...`} */}
                      <Link to={`/chc/${id}`}>
                        <CharityItem
                          name={
                            names &&
                            names.reduce(
                              (agg, x) => (x.primary ? x.value : agg),
                              null
                            )
                          }
                          description={
                            names &&
                            names
                              .reduce(
                                (agg, x) =>
                                  x.primary ? agg : [...agg, x.value],
                                []
                              )
                              .join(", ")
                          }
                          revenue={
                            <Income
                              income={
                                finances && finances.length > 0
                                  ? finances[0].income
                                  : null
                              }
                              id={id}
                            />
                          }
                        />
                      </Link>
                    </List.Item>
                  )}
                />
              </CenteredContent>
            </ResponsiveScroll>
          </Fragment>
        );
      }}
    </Query>
  );
};
CharitiesList.propTypes = {
  filtersObj: PropTypes.object.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default CharitiesList;
