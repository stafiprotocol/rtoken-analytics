import ChartCol, { BarColor } from "@components/dataGrid/chartCol";
import DataCol from "@components/dataGrid/col";
import DataRow from "@components/dataGrid/row";
import { getCollect } from "@features/dashboardClice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Index(props: any) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCollect());
  }, []);

  const { data } = useSelector((state: any) => {
    return {
      data: state.dashboardModule.collect,
    };
  });
  return (
    <div>
      <DataRow>
        <DataCol
          title={"FIS TOTAL SUPPLY"}
          amount={data ? data.fisTokenInfo.totalSupply : "--"}
          toolTip={"test"}
          decimals={2}
        />
        <DataCol
          title={"FIS CIRCULATING SUPPLY"}
          amount={data ? data.fisTokenInfo.circulating : "--"}
          toolTip={"test"}
          decimals={2}
        />
        <DataCol
          title={"FIS PRICE"}
          unit="$"
          amount={data ? data.fisTokenInfo.price : "--"}
          toolTip={"test"}
        />
        <DataCol
          title={"CAP"}
          unit="$"
          amount={data ? data.fisTokenInfo.cap : "--"}
          toolTip={"test"}
        />
      </DataRow>

      <div style={{ height: "55px" }}></div>

      <DataRow>
        <DataCol
          title={"STAKED VALUE"}
          unit="$"
          amount={data ? data.info.stakeValue : "--"}
          toolTip={"test"}
        />
        <DataCol
          title={"rTOKEN VALUE"}
          unit="$"
          amount={data ? data.info.rtokenValue : "--"}
          toolTip={"test"}
        />
        <DataCol
          title={"rTOKEN VALUE (ERC20)"}
          unit="$"
          amount={
            data
              ? Number(data.info.erc20RtokenValue) +
                Number(data.info.bep20RtokenValue)
              : "--"
          }
          toolTip={"test"}
        />
        <DataCol
          title={"TOTAL FEE"}
          unit="$"
          amount={data ? data.info.feesValue : "--"}
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
          data={data ? data.list.stakeValue.data : []}
          xData={data ? data.list.stakeValue.yData : []}
          title="STAKED VALUE"
          barColor={BarColor.left}
        />
        <ChartCol
          data={data ? data.list.reddemValue.data : []}
          xData={data ? data.list.reddemValue.yData : []}
          title="REDEEM VALUE"
          barColor={BarColor.right}
        />
        <ChartCol
          data={data ? data.list.rtokenValue.data : []}
          xData={data ? data.list.rtokenValue.yData : []}
          title="rTOKEN VALUE"
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
