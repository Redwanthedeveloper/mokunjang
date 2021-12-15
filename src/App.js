import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from './redux/blockchain/blockchainActions';
import { fetchData } from './redux/data/dataActions';
import * as s from './styles/globalStyles';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import OurTeam from './components/OurTeam';
import BuyAnApe from './components/BuyAnApe';
import AccordionMenu from './components/AccordeonMenu';
import Footer from './components/Footer';
import JoinCommunity from './components/JoinCommunity';
import {
  menuLinks,
  bannerImages,
  buyAnApeText,
  roadMapSubtitleText,
  joinTheCommunity,
  smartContactAdress,
  frequentlyAskedQuestionsArray,
  roadMapGoalsArray,
  ourTeamSubtitle,
  teamArray,
  footerTermsOfService,
  footerLogoUrl,
  footerIcons,
} from './components/websiteText';
// import OutTeam from './components/OurTeam';
import Roadmap from './components/Roadmap';
import About from './components/About';
import ImageSlider from './components/ImageSlider';
import CountDown from './components/CountDown';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: '',
    SCAN_LINK: '',
    NETWORK: {
      NAME: '',
      SYMBOL: '',
      ID: 0,
    },
    NFT_NAME: '',
    SYMBOL: '',
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: '',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log('Cost: ', totalCostWei);
    console.log('Gas limit: ', totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(CONFIG.CONTRACT_ADDRESS, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once('error', (err) => {
        console.log(err);
        setFeedback('Sorry, something went wrong please try again later.');
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch('/config/config.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const logoText = 'Logo';
  const banner = {
    buttonText: 'Connect',
    nftQuantity: `${data.totalSupply} / ${CONFIG.MAX_SUPPLY}`,
    bannerText: [
      `Please make sure you are connected to the right network (
				${CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please note:
				Once you make the purchase, you cannot undo this action.`,
      ` We have set the
				gas limit to ${CONFIG.GAS_LIMIT} for the contract to successfully mint
				your NFT. We recommend that you don't lower the gas limit.`,
    ],
  };

  return (
    <div className='appdiv'>
      <NavBar menuLinks={menuLinks} logoText={logoText} />
      <Banner banner={banner} bannerImages={bannerImages}>
        <StyledLink target={'_blank'} href={CONFIG.SCAN_LINK}>
          <div className='contactAddress'>
            {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
          </div>
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <s.TextTitle
                style={{ textAlign: 'center', color: 'var(--accent-text)' }}
              >
                The sale has ended.
              </s.TextTitle>
              <s.TextDescription
                style={{ textAlign: 'center', color: 'var(--accent-text)' }}
              >
                You can still find {CONFIG.NFT_NAME} on
              </s.TextDescription>
              <s.SpacerSmall />
              <StyledLink target={'_blank'} href={CONFIG.MARKETPLACE_LINK}>
                {CONFIG.MARKETPLACE}
              </StyledLink>
            </>
          ) : (
            <>
              <s.TextTitle
                style={{ textAlign: 'center', color: 'var(--accent-text)' }}
              >
                1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{' '}
                {CONFIG.NETWORK.SYMBOL}.
              </s.TextTitle>
              <s.SpacerXSmall />
              <s.TextDescription
                style={{ textAlign: 'center', color: 'var(--accent-text)' }}
              >
                Excluding gas fees.
              </s.TextDescription>
              <s.SpacerSmall />
              {blockchain.account === '' ||
              blockchain.smartContract === null ? (
                <s.Container ai={'center'} jc={'center'}>
                  <s.TextDescription
                    style={{
                      textAlign: 'center',
                      color: 'var(--accent-text)',
                    }}
                  >
                    Connect to the {CONFIG.NETWORK.NAME} network
                  </s.TextDescription>
                  <s.SpacerSmall />
                  <button
                    className='connectButton'
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    CONNECT
                  </button>
                  {blockchain.errorMsg !== '' ? (
                    <>
                      <s.SpacerSmall />
                      <s.TextDescription
                        style={{
                          textAlign: 'center',
                          color: 'var(--accent-text)',
                        }}
                      >
                        {blockchain.errorMsg}
                      </s.TextDescription>
                    </>
                  ) : null}
                </s.Container>
              ) : (
                <>
                  <s.TextDescription
                    style={{
                      textAlign: 'center',
                      color: 'var(--accent-text)',
                    }}
                  >
                    {feedback}
                  </s.TextDescription>
                  <s.SpacerMedium />
                  <s.Container ai={'center'} jc={'center'} fd={'row'}>
                    <StyledRoundButton
                      style={{ lineHeight: 0.4, display: 'flex' }}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      -
                    </StyledRoundButton>
                    <s.SpacerMedium />
                    <s.TextDescription
                      style={{
                        textAlign: 'center',
                        color: 'var(--accent-text)',
                      }}
                    >
                      {mintAmount}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <StyledRoundButton
                      style={{ lineHeight: 0.4, display: 'flex' }}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      +
                    </StyledRoundButton>
                  </s.Container>
                  <s.SpacerSmall />
                  <s.Container ai={'center'} jc={'center'} fd={'row'}>
                    <StyledButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      {claimingNft ? 'BUSY' : 'BUY'}
                    </StyledButton>
                  </s.Container>
                </>
              )}
            </>
          )}
        </StyledLink>
      </Banner>
      <CountDown />
      <About />
      <ImageSlider />
      <Roadmap
        roadMapGoalsArray={roadMapGoalsArray}
        roadMapSubtitleText={roadMapSubtitleText}
      />
      <JoinCommunity joinTheCommunity={joinTheCommunity} />
      <AccordionMenu
        frequentlyAskedQuestionsArray={frequentlyAskedQuestionsArray}
      />
      <OurTeam teamArray={teamArray} ourTeamSubtitle={ourTeamSubtitle} />
      <div className='smartContractAddress'>
        <h1>Verified Smart Contract Address:</h1>
        <a href={smartContactAdress.href}>{smartContactAdress.text}</a>
      </div>
      <Footer
        logoText={logoText}
        footerIcons={footerIcons}
        footerLogoUrl={footerLogoUrl}
        footerTermsOfService={footerTermsOfService}
      />
    </div>
  );
}

export default App;
