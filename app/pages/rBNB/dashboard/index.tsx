import ChartCol, { BarColor } from "@components/dataGrid/chartCol";
import DataCol from "@components/dataGrid/col";
import DataRow from "@components/dataGrid/row";
import { getRToken, initData, Rtoken } from "@features/dashboardClice";
import { rSymbol } from "@keyring/defaults";
import NumberUtil from "@util/numberUtil";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Index(props: any) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRToken(Rtoken.rBnb));
    dispatch(initData(rSymbol.Bnb));
  }, []);

  const { data, bep20Amount, ratio, totalIssuance, free } = useSelector(
    (state: any) => {
      return {
        data: state.dashboardModule.rToken,
        bep20Amount: state.ETHModule.bepRBNBBalance,
        ratio: state.dashboardModule.ratio,
        totalIssuance: state.dashboardModule.totalIssuance,
        free: state.dashboardModule.free,
      };
    }
  );

  return (
    <div>
      <DataRow>
        <DataCol
          title={"STAKED BNB VALUE"}
          unit="$"
          amount={
            data
              ? NumberUtil.handleFisAmountToFixed(
                  data.info.nativePrice * ratio * totalIssuance
                )
              : "--"
          }
          toolTip={"test"}
        />
        <DataCol
          title={"rBNB VALUE"}
          unit="$"
          amount={
            data
              ? NumberUtil.handleFisAmountToFixed(
                  data.info.rtokenPrice * totalIssuance
                )
              : "--"
          }
          toolTip={"test"}
        />
        <DataCol
          title={"rBNB VALUE (BEP20)"}
          unit="$"
          amount={
            data
              ? NumberUtil.handleFisAmountToFixed(data.info.bep20RtokenValue)
              : "--"
          }
          toolTip={"test"}
        />
        <DataCol
          title={"TOTAL FEE"}
          unit="$"
          amount={
            data
              ? NumberUtil.handleFisAmountToFixed(data.info.rtokenPrice * free)
              : "--"
          }
          toolTip={"test"}
        />
        <DataCol
          title={"rBNB/BNB"}
          amount={NumberUtil.handleFisAmountRateToFixed(ratio)}
          toolTip={"test"}
        />
        <DataCol
          title={"rBNB PRICE"}
          unit="$"
          amount={data ? data.info.rtokenPrice : "--"}
          toolTip={"test"}
        />
        <DataCol
          title={"rBNB AMOUNT"}
          amount={totalIssuance}
          toolTip={"test"}
        />
        <DataCol
          title={"rBNB AMOUNT (BEP20)"}
          amount={data ? data.info.bep20RtokenAmount : "--"}
          toolTip={"test"}
        />
        <DataCol
          title={"ORIGINAL VALIDATORS"}
          amount={data ? data.info.validators : "--"}
          toolTip={"test"}
        />
        <DataCol
          title={"UNIQUE USERS"}
          amount={data ? data.info.users : "--"}
          toolTip={"test"}
        />
        <DataCol
          title={"STAKED TRANSACTIONS"}
          amount={data ? data.info.stakeTxs : "--"}
          toolTip={"test"}
        />
        <DataCol
          title={"REDEEM VALUE "}
          unit="$"
          amount={data ? data.info.reddemValue : "--"}
          toolTip={"test"}
        />
      </DataRow>
      <DataRow>
        <ChartCol
          data={data ? data.list.rate.data : []}
          xData={data ? data.list.rate.yData : []}
          title="rBNB : BNB  RATE"
          barColor={BarColor.left}
        />
        <ChartCol
          data={data ? data.list.price.data : []}
          xData={data ? data.list.price.yData : []}
          title="rBNB PRICE"
          barColor={BarColor.right}
        />
        <ChartCol
          data={data ? data.list.mint.data : []}
          xData={data ? data.list.mint.yData : []}
          title="MINTED rBNB (NATIVE)"
          barColor={BarColor.left}
        />
        <ChartCol
          data={data ? data.list.erc20Mint.data : []}
          xData={data ? data.list.erc20Mint.yData : []}
          title="MINTED rBNB (BEP20)"
          barColor={BarColor.right}
        />
        <ChartCol
          data={data ? data.list.stakeValue.data : []}
          xData={data ? data.list.stakeValue.yData : []}
          title="STAKED BNB VALUE"
          barColor={BarColor.left}
        />
        <ChartCol
          data={data ? data.list.reddemValue.data : []}
          xData={data ? data.list.reddemValue.yData : []}
          title="REDEEM BNB VALUE"
          barColor={BarColor.right}
        />
        <ChartCol
          data={data ? data.list.rtokenValue.data : []}
          xData={data ? data.list.rtokenValue.yData : []}
          title="rBNB VALUE"
          barColor={BarColor.left}
        />
        <ChartCol
          data={data ? data.list.feesValue.data : []}
          xData={data ? data.list.feesValue.yData : []}
          title="STAKED FEE GENERATED"
          barColor={BarColor.right}
        />
        <ChartCol
          data={data ? data.list.users.data : []}
          xData={data ? data.list.users.yData : []}
          title="UNIQUE USERS"
          barColor={BarColor.left}
        />
        <ChartCol
          data={data ? data.list.stakeTxs.data : []}
          xData={data ? data.list.stakeTxs.yData : []}
          title="STAKED TRANSACTION"
          barColor={BarColor.right}
        />
      </DataRow>
    </div>
  );
}
