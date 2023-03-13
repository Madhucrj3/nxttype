import React from 'react'
import GamingMainContainer from '../../components/GamingMainContainer';
import withNavbarSidebarhoc from '../../hocs/withNavbarSidebarhoc'

const Gaming = () => {
  return (
    <>
    <GamingMainContainer />
    </>
  )
}

export default withNavbarSidebarhoc(Gaming);