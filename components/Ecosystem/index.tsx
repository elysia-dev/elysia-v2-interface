import CollateralCategory from 'enums/CollateralCategory';
import useReserveData from 'hooks/useReserveData';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Gradient from 'utils/gradient';
import { parseTokenId } from 'utils/parseTokenId';
import PortFolio from './PortFolio';
import Project from './Project';
import { EcosystemWrapper } from './styles';
import Top from './Top';

const Ecosystem = () => {
  const [browserHeight, setBrowserHeight] = useState(0);
  const { reserveState, getAssetBondsByNetwork } = useReserveData();
  const [pageNum, setPageNum] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { pathname } = useRouter();

  const drawCanvas = useCallback(() => {
    const dpr = window.devicePixelRatio;
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    if (!canvas) return;
    let sub = 0;
    if (window.innerHeight > document.body.clientHeight) {
      sub = window.innerHeight - document.body.clientHeight;
    }
    canvas.width = document.body.clientWidth * dpr;
    canvas.height = (document.body.clientHeight + sub) * dpr;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;
    new Gradient(ctx, canvas.width, canvas.height, pathname);
  }, [pathname]);

  const assetBonds = useMemo(() => {
    return getAssetBondsByNetwork();
  }, [reserveState]);

  const assetBondTokensBackedByEstate = useMemo(() => {
    return assetBonds
      .filter((product) => {
        const parsedId = parseTokenId(product.id);
        return CollateralCategory.Others !== parsedId.collateralCategory;
      })
      .sort((a, b) => {
        return b.loanStartTimestamp! - a.loanStartTimestamp! >= 0 ? 1 : -1;
      });
  }, [assetBonds]);

  useEffect(() => {
    if (typeof document === undefined || typeof window === undefined) return;
    if (window.innerHeight > document.body.clientHeight) {
      console.log(document.body.clientHeight);
      const sub = window.innerHeight - document.body.clientHeight;
      setBrowserHeight(document.body.clientHeight + sub);
      return;
    }
    setBrowserHeight(document.body.clientHeight);
  }, [assetBondTokensBackedByEstate, pageNum]);

  useEffect(() => {
    drawCanvas();
  }, [pathname, pageNum, assetBondTokensBackedByEstate]);

  return (
    <EcosystemWrapper theme={browserHeight}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
          zIndex: -2,
        }}></canvas>
      <Top />
      <PortFolio
        assetBondTokens={assetBondTokensBackedByEstate}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </EcosystemWrapper>
  );
};

export default Ecosystem;
