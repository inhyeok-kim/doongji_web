import { useQuery } from "@tanstack/react-query";
import { selectBudgetList, selectTradeList } from "../api/AccountApi";
import { PROFILE } from "../../../Utils/Config";
import { getBudgetDataList, getTradeDataList } from "../api/TempData";
import { BudgetOfApi, TradeOfApi } from "../_types";


export function useGetTradeList(){
    const {status, data, refetch} = useQuery<TradeOfApi[]>(["trade"], selectTradeList,{
        refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
        retry: 0, // 실패시 재호출 몇번 할지
    });

    if(status === 'loading'){
        return [[],refetch];
    }

    if(status === 'error'){
        if(PROFILE === 'DEV'){
            return [getTradeDataList(),refetch];
        } else if(PROFILE === 'PROD'){
            return ['error',refetch];
        }
    }

    return [data,refetch];

}

export function useGetBudgetList(){
    const {status, data, refetch} = useQuery<BudgetOfApi[]>(["budget"], selectBudgetList,{
        refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
        retry: 0, // 실패시 재호출 몇번 할지
        onSuccess: data => {
        // 성공시 호출
        },
        onError: (e : any) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
        // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
            console.log(e.message); 
        }
    });

    if(status === 'loading'){
        return ['loading',refetch];
    }

    if(status === 'error'){
        if(PROFILE === 'DEV'){
            return [getBudgetDataList(),refetch];
        } else if(PROFILE === 'PROD'){
            return ['error',refetch];
        }
    }

    return [data,refetch];

}

