const events = [
  {
    title: "5지는 치즈데이. 가정의달은 도미노와 함께!",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1243_eTBAQsir.jpg",
    content: `모든 고객 이용 가능(단, 배달앱 주문 시 혜택 적용 불가)\n
      제휴 및 쿠폰 등 여타 할인과 중복 적용 가능\n
      Best 피자 5종 오리지널 도우 주문 한정 혜택 적용 가능합니다.\n
      모짜렐라 치즈 한정 1.5배 적용됩니다.\n
      일부 특수 매장(대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    state: "진행중",
    date: "2024-04-20",
  },
  {
    title: "SKT 0day 배달/포장 50% 할인",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1231_GhELVIyL.jpg",
    content: `쿠폰 다운로드 기간: 2024년 4월 10일(수), 4월 20일(토), 4월 30일(화) 3일 중 1일\n
      쿠폰 사용 기간: 각 발급일로부터 5일 (4/10~4/14, 4/20~4/24, 4/30~5/4)\n
      쿠폰 다운로드 방법: T멤버십 앱 로그인 > 0 day 이벤트 페이지 > 도미노피자 할인 쿠폰 다운로드\n
      쿠폰 사용 방법: 도미노피자 홈페이지/앱 접속 > 배달/포장 주문 선택 > 배달 주소 등록/포장 매장 선택 > 장바구니에 담기 > 할인 적용 [통신사 및 카드사 제휴 프로모션 선택] > [SKT 0 day 혜택(배달/포장 50%, Silver, Gold, VIP 모두 사용 가능)] 선택 > 쿠폰 번호 입력 > 조회 클릭 > 적용 클릭 > 결제 및 주문 완료\n
      도미노피자 홈페이지/앱 이용 시 오전 10시 이후부터 원활하게 주문하실 수 있습니다.\n
      매장 오픈 시간: 오전 11시~오전 11시 30분(지점별 다름)`,
    state: "진행중",
    date: "2024-04-19",
  },
  {
    title: "행운뽑기 주인공을 찾아라",
    img: "https://cdn.dominos.co.kr/renewal2018/w/event/240405_luckydraw/images/img_01_login.jpg",
    content: `이벤트 기간 : 2024년 4월 5일 ~ 5월 2일\n
      온라인 회원 중 주문 완료한 고객 (웹, 앱)에 한하여 이벤트 기간내 참여 가능\n
      광고성 정보 수신 동의 중 문자메세지 (SMS)와 이메일 (E-mail) 모두 동의시 참여 가능\n
      응모 완료 후 광고성 정보 수신 동의 수정시 도미노콘 수령이 제한될 수 있습니다.\n
      주문취소 등 부적절한 방법으로 혜택을 득한 경우에는 당첨이 취소됩니다.\n
      광고 수신동의 변경은 ‘나의 정보 > 정보수정’ 페이지 하단에서 변경 가능합니다.\n
      도미노콘 (해피 데일리 피자) 당첨자는 2024년 5월 7일 등록된 핸드폰 번호로 도미노콘 일괄 발송됩니다.\n
      사이드디시 무료 쿠폰 (1명), 배달비 무료 쿠폰 (498명)은 당첨시 즉시 지급\n
      사이드디시만 주문시 참여 횟수에 반영되지 않습니다.\n
      일부 특수매장 (대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    state: "진행중",
    date: "2024-04-17",
  },
  {
    title: "해피 데일리 피자 쿠폰 챌린지",
    img: "https://cdn.dominos.co.kr/renewal2018/w/event/240202_hdp/images/1_img_login.jpg",
    content: `이벤트 기간: 2024년 2월 16일 ~ 6월 30일\n
      온라인 회원 대상 이벤트이며 해피 데일리 피자 포함 주문 회원에 한하여 이벤트 참여 가능\n
      *해피 데일리 피자 5종 : 맵퍼로니, 마라 불고기, 소시지 맥스, 클래식 리코타, 맥콘 베이컨\n
      *해피 데일리 피자 포함 주문 후 피자 수령 완료 이후에 약 1~2시간 이후부터 확인 가능합니다.\n
      혜택 쿠폰 발급 시, 기존에 적립된 스탬프 갯수만큼 차감됩니다.\n
      지급된 쿠폰 혜택은 취소가 불가하며 이점 유의해주시기 바랍니다.\n
      도미노콘 선착순 응모는 SMS 광고성 정보 수신 동의 후 응모 가능합니다.\n`,
    state: "종료",
    date: "2024-04-16",
  },
  {
    title: "5지는 치즈데이. 가정의달은 도미노와 함께!",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1243_eTBAQsir.jpg",
    content: `모든 고객 이용 가능(단, 배달앱 주문 시 혜택 적용 불가)\n
      제휴 및 쿠폰 등 여타 할인과 중복 적용 가능\n
      Best 피자 5종 오리지널 도우 주문 한정 혜택 적용 가능합니다.\n
      모짜렐라 치즈 한정 1.5배 적용됩니다.\n
      일부 특수 매장(대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    state: "진행중",
    date: "2024-04-20",
  },
  {
    title: "SKT 0day 배달/포장 50% 할인",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1231_GhELVIyL.jpg",
    content: `쿠폰 다운로드 기간: 2024년 4월 10일(수), 4월 20일(토), 4월 30일(화) 3일 중 1일\n
      쿠폰 사용 기간: 각 발급일로부터 5일 (4/10~4/14, 4/20~4/24, 4/30~5/4)\n
      쿠폰 다운로드 방법: T멤버십 앱 로그인 > 0 day 이벤트 페이지 > 도미노피자 할인 쿠폰 다운로드\n
      쿠폰 사용 방법: 도미노피자 홈페이지/앱 접속 > 배달/포장 주문 선택 > 배달 주소 등록/포장 매장 선택 > 장바구니에 담기 > 할인 적용 [통신사 및 카드사 제휴 프로모션 선택] > [SKT 0 day 혜택(배달/포장 50%, Silver, Gold, VIP 모두 사용 가능)] 선택 > 쿠폰 번호 입력 > 조회 클릭 > 적용 클릭 > 결제 및 주문 완료\n
      도미노피자 홈페이지/앱 이용 시 오전 10시 이후부터 원활하게 주문하실 수 있습니다.\n
      매장 오픈 시간: 오전 11시~오전 11시 30분(지점별 다름)`,
    state: "진행중",
    date: "2024-04-19",
  },
  {
    title: "행운뽑기 주인공을 찾아라",
    img: "https://cdn.dominos.co.kr/renewal2018/w/event/240405_luckydraw/images/img_01_login.jpg",
    content: `이벤트 기간 : 2024년 4월 5일 ~ 5월 2일\n
      온라인 회원 중 주문 완료한 고객 (웹, 앱)에 한하여 이벤트 기간내 참여 가능\n
      광고성 정보 수신 동의 중 문자메세지 (SMS)와 이메일 (E-mail) 모두 동의시 참여 가능\n
      응모 완료 후 광고성 정보 수신 동의 수정시 도미노콘 수령이 제한될 수 있습니다.\n
      주문취소 등 부적절한 방법으로 혜택을 득한 경우에는 당첨이 취소됩니다.\n
      광고 수신동의 변경은 ‘나의 정보 > 정보수정’ 페이지 하단에서 변경 가능합니다.\n
      도미노콘 (해피 데일리 피자) 당첨자는 2024년 5월 7일 등록된 핸드폰 번호로 도미노콘 일괄 발송됩니다.\n
      사이드디시 무료 쿠폰 (1명), 배달비 무료 쿠폰 (498명)은 당첨시 즉시 지급\n
      사이드디시만 주문시 참여 횟수에 반영되지 않습니다.\n
      일부 특수매장 (대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    state: "진행중",
    date: "2024-04-17",
  },
  {
    title: "해피 데일리 피자 쿠폰 챌린지",
    img: "https://cdn.dominos.co.kr/renewal2018/w/event/240202_hdp/images/1_img_login.jpg",
    content: `이벤트 기간: 2024년 2월 16일 ~ 6월 30일\n
      온라인 회원 대상 이벤트이며 해피 데일리 피자 포함 주문 회원에 한하여 이벤트 참여 가능\n
      *해피 데일리 피자 5종 : 맵퍼로니, 마라 불고기, 소시지 맥스, 클래식 리코타, 맥콘 베이컨\n
      *해피 데일리 피자 포함 주문 후 피자 수령 완료 이후에 약 1~2시간 이후부터 확인 가능합니다.\n
      혜택 쿠폰 발급 시, 기존에 적립된 스탬프 갯수만큼 차감됩니다.\n
      지급된 쿠폰 혜택은 취소가 불가하며 이점 유의해주시기 바랍니다.\n
      도미노콘 선착순 응모는 SMS 광고성 정보 수신 동의 후 응모 가능합니다.\n`,
    state: "종료",
    date: "2024-04-16",
  },
  {
    title: "5지는 치즈데이. 가정의달은 도미노와 함께!",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1243_eTBAQsir.jpg",
    content: `모든 고객 이용 가능(단, 배달앱 주문 시 혜택 적용 불가)\n
      제휴 및 쿠폰 등 여타 할인과 중복 적용 가능\n
      Best 피자 5종 오리지널 도우 주문 한정 혜택 적용 가능합니다.\n
      모짜렐라 치즈 한정 1.5배 적용됩니다.\n
      일부 특수 매장(대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    state: "진행중",
    date: "2024-04-20",
  },
  {
    title: "SKT 0day 배달/포장 50% 할인",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1231_GhELVIyL.jpg",
    content: `쿠폰 다운로드 기간: 2024년 4월 10일(수), 4월 20일(토), 4월 30일(화) 3일 중 1일\n
      쿠폰 사용 기간: 각 발급일로부터 5일 (4/10~4/14, 4/20~4/24, 4/30~5/4)\n
      쿠폰 다운로드 방법: T멤버십 앱 로그인 > 0 day 이벤트 페이지 > 도미노피자 할인 쿠폰 다운로드\n
      쿠폰 사용 방법: 도미노피자 홈페이지/앱 접속 > 배달/포장 주문 선택 > 배달 주소 등록/포장 매장 선택 > 장바구니에 담기 > 할인 적용 [통신사 및 카드사 제휴 프로모션 선택] > [SKT 0 day 혜택(배달/포장 50%, Silver, Gold, VIP 모두 사용 가능)] 선택 > 쿠폰 번호 입력 > 조회 클릭 > 적용 클릭 > 결제 및 주문 완료\n
      도미노피자 홈페이지/앱 이용 시 오전 10시 이후부터 원활하게 주문하실 수 있습니다.\n
      매장 오픈 시간: 오전 11시~오전 11시 30분(지점별 다름)`,
    state: "진행중",
    date: "2024-04-19",
  },
  {
    title: "행운뽑기 주인공을 찾아라",
    img: "https://cdn.dominos.co.kr/renewal2018/w/event/240405_luckydraw/images/img_01_login.jpg",
    content: `이벤트 기간 : 2024년 4월 5일 ~ 5월 2일\n
      온라인 회원 중 주문 완료한 고객 (웹, 앱)에 한하여 이벤트 기간내 참여 가능\n
      광고성 정보 수신 동의 중 문자메세지 (SMS)와 이메일 (E-mail) 모두 동의시 참여 가능\n
      응모 완료 후 광고성 정보 수신 동의 수정시 도미노콘 수령이 제한될 수 있습니다.\n
      주문취소 등 부적절한 방법으로 혜택을 득한 경우에는 당첨이 취소됩니다.\n
      광고 수신동의 변경은 ‘나의 정보 > 정보수정’ 페이지 하단에서 변경 가능합니다.\n
      도미노콘 (해피 데일리 피자) 당첨자는 2024년 5월 7일 등록된 핸드폰 번호로 도미노콘 일괄 발송됩니다.\n
      사이드디시 무료 쿠폰 (1명), 배달비 무료 쿠폰 (498명)은 당첨시 즉시 지급\n
      사이드디시만 주문시 참여 횟수에 반영되지 않습니다.\n
      일부 특수매장 (대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    state: "진행중",
    date: "2024-04-17",
  },
  {
    title: "해피 데일리 피자 쿠폰 챌린지",
    img: "https://cdn.dominos.co.kr/renewal2018/w/event/240202_hdp/images/1_img_login.jpg",
    content: `이벤트 기간: 2024년 2월 16일 ~ 6월 30일\n
      온라인 회원 대상 이벤트이며 해피 데일리 피자 포함 주문 회원에 한하여 이벤트 참여 가능\n
      *해피 데일리 피자 5종 : 맵퍼로니, 마라 불고기, 소시지 맥스, 클래식 리코타, 맥콘 베이컨\n
      *해피 데일리 피자 포함 주문 후 피자 수령 완료 이후에 약 1~2시간 이후부터 확인 가능합니다.\n
      혜택 쿠폰 발급 시, 기존에 적립된 스탬프 갯수만큼 차감됩니다.\n
      지급된 쿠폰 혜택은 취소가 불가하며 이점 유의해주시기 바랍니다.\n
      도미노콘 선착순 응모는 SMS 광고성 정보 수신 동의 후 응모 가능합니다.\n`,
    state: "종료",
    date: "2024-04-16",
  },
  {
    title: "5지는 치즈데이. 가정의달은 도미노와 함께!",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1243_eTBAQsir.jpg",
    content: `모든 고객 이용 가능(단, 배달앱 주문 시 혜택 적용 불가)\n
      제휴 및 쿠폰 등 여타 할인과 중복 적용 가능\n
      Best 피자 5종 오리지널 도우 주문 한정 혜택 적용 가능합니다.\n
      모짜렐라 치즈 한정 1.5배 적용됩니다.\n
      일부 특수 매장(대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    state: "진행중",
    date: "2024-04-20",
  },
  {
    title: "SKT 0day 배달/포장 50% 할인",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1231_GhELVIyL.jpg",
    content: `쿠폰 다운로드 기간: 2024년 4월 10일(수), 4월 20일(토), 4월 30일(화) 3일 중 1일\n
      쿠폰 사용 기간: 각 발급일로부터 5일 (4/10~4/14, 4/20~4/24, 4/30~5/4)\n
      쿠폰 다운로드 방법: T멤버십 앱 로그인 > 0 day 이벤트 페이지 > 도미노피자 할인 쿠폰 다운로드\n
      쿠폰 사용 방법: 도미노피자 홈페이지/앱 접속 > 배달/포장 주문 선택 > 배달 주소 등록/포장 매장 선택 > 장바구니에 담기 > 할인 적용 [통신사 및 카드사 제휴 프로모션 선택] > [SKT 0 day 혜택(배달/포장 50%, Silver, Gold, VIP 모두 사용 가능)] 선택 > 쿠폰 번호 입력 > 조회 클릭 > 적용 클릭 > 결제 및 주문 완료\n
      도미노피자 홈페이지/앱 이용 시 오전 10시 이후부터 원활하게 주문하실 수 있습니다.\n
      매장 오픈 시간: 오전 11시~오전 11시 30분(지점별 다름)`,
    state: "진행중",
    date: "2024-04-19",
  },
  {
    title: "행운뽑기 주인공을 찾아라",
    img: "https://cdn.dominos.co.kr/renewal2018/w/event/240405_luckydraw/images/img_01_login.jpg",
    content: `이벤트 기간 : 2024년 4월 5일 ~ 5월 2일\n
      온라인 회원 중 주문 완료한 고객 (웹, 앱)에 한하여 이벤트 기간내 참여 가능\n
      광고성 정보 수신 동의 중 문자메세지 (SMS)와 이메일 (E-mail) 모두 동의시 참여 가능\n
      응모 완료 후 광고성 정보 수신 동의 수정시 도미노콘 수령이 제한될 수 있습니다.\n
      주문취소 등 부적절한 방법으로 혜택을 득한 경우에는 당첨이 취소됩니다.\n
      광고 수신동의 변경은 ‘나의 정보 > 정보수정’ 페이지 하단에서 변경 가능합니다.\n
      도미노콘 (해피 데일리 피자) 당첨자는 2024년 5월 7일 등록된 핸드폰 번호로 도미노콘 일괄 발송됩니다.\n
      사이드디시 무료 쿠폰 (1명), 배달비 무료 쿠폰 (498명)은 당첨시 즉시 지급\n
      사이드디시만 주문시 참여 횟수에 반영되지 않습니다.\n
      일부 특수매장 (대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    state: "진행중",
    date: "2024-04-17",
  },
  {
    title: "해피 데일리 피자 쿠폰 챌린지",
    img: "https://cdn.dominos.co.kr/renewal2018/w/event/240202_hdp/images/1_img_login.jpg",
    content: `이벤트 기간: 2024년 2월 16일 ~ 6월 30일\n
      온라인 회원 대상 이벤트이며 해피 데일리 피자 포함 주문 회원에 한하여 이벤트 참여 가능\n
      *해피 데일리 피자 5종 : 맵퍼로니, 마라 불고기, 소시지 맥스, 클래식 리코타, 맥콘 베이컨\n
      *해피 데일리 피자 포함 주문 후 피자 수령 완료 이후에 약 1~2시간 이후부터 확인 가능합니다.\n
      혜택 쿠폰 발급 시, 기존에 적립된 스탬프 갯수만큼 차감됩니다.\n
      지급된 쿠폰 혜택은 취소가 불가하며 이점 유의해주시기 바랍니다.\n
      도미노콘 선착순 응모는 SMS 광고성 정보 수신 동의 후 응모 가능합니다.\n`,
    state: "종료",
    date: "2024-04-16",
  },
  {
    title: "5지는 치즈데이. 가정의달은 도미노와 함께!",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1243_eTBAQsir.jpg",
    content: `모든 고객 이용 가능(단, 배달앱 주문 시 혜택 적용 불가)\n
      제휴 및 쿠폰 등 여타 할인과 중복 적용 가능\n
      Best 피자 5종 오리지널 도우 주문 한정 혜택 적용 가능합니다.\n
      모짜렐라 치즈 한정 1.5배 적용됩니다.\n
      일부 특수 매장(대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    state: "진행중",
    date: "2024-04-20",
  },
  {
    title: "SKT 0day 배달/포장 50% 할인",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1231_GhELVIyL.jpg",
    content: `쿠폰 다운로드 기간: 2024년 4월 10일(수), 4월 20일(토), 4월 30일(화) 3일 중 1일\n
      쿠폰 사용 기간: 각 발급일로부터 5일 (4/10~4/14, 4/20~4/24, 4/30~5/4)\n
      쿠폰 다운로드 방법: T멤버십 앱 로그인 > 0 day 이벤트 페이지 > 도미노피자 할인 쿠폰 다운로드\n
      쿠폰 사용 방법: 도미노피자 홈페이지/앱 접속 > 배달/포장 주문 선택 > 배달 주소 등록/포장 매장 선택 > 장바구니에 담기 > 할인 적용 [통신사 및 카드사 제휴 프로모션 선택] > [SKT 0 day 혜택(배달/포장 50%, Silver, Gold, VIP 모두 사용 가능)] 선택 > 쿠폰 번호 입력 > 조회 클릭 > 적용 클릭 > 결제 및 주문 완료\n
      도미노피자 홈페이지/앱 이용 시 오전 10시 이후부터 원활하게 주문하실 수 있습니다.\n
      매장 오픈 시간: 오전 11시~오전 11시 30분(지점별 다름)`,
    state: "진행중",
    date: "2024-04-19",
  },
  {
    title: "행운뽑기 주인공을 찾아라",
    img: "https://cdn.dominos.co.kr/renewal2018/w/event/240405_luckydraw/images/img_01_login.jpg",
    content: `이벤트 기간 : 2024년 4월 5일 ~ 5월 2일\n
      온라인 회원 중 주문 완료한 고객 (웹, 앱)에 한하여 이벤트 기간내 참여 가능\n
      광고성 정보 수신 동의 중 문자메세지 (SMS)와 이메일 (E-mail) 모두 동의시 참여 가능\n
      응모 완료 후 광고성 정보 수신 동의 수정시 도미노콘 수령이 제한될 수 있습니다.\n
      주문취소 등 부적절한 방법으로 혜택을 득한 경우에는 당첨이 취소됩니다.\n
      광고 수신동의 변경은 ‘나의 정보 > 정보수정’ 페이지 하단에서 변경 가능합니다.\n
      도미노콘 (해피 데일리 피자) 당첨자는 2024년 5월 7일 등록된 핸드폰 번호로 도미노콘 일괄 발송됩니다.\n
      사이드디시 무료 쿠폰 (1명), 배달비 무료 쿠폰 (498명)은 당첨시 즉시 지급\n
      사이드디시만 주문시 참여 횟수에 반영되지 않습니다.\n
      일부 특수매장 (대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    state: "진행중",
    date: "2024-04-17",
  },
  {
    title: "해피 데일리 피자 쿠폰 챌린지",
    img: "https://cdn.dominos.co.kr/renewal2018/w/event/240202_hdp/images/1_img_login.jpg",
    content: `이벤트 기간: 2024년 2월 16일 ~ 6월 30일\n
      온라인 회원 대상 이벤트이며 해피 데일리 피자 포함 주문 회원에 한하여 이벤트 참여 가능\n
      *해피 데일리 피자 5종 : 맵퍼로니, 마라 불고기, 소시지 맥스, 클래식 리코타, 맥콘 베이컨\n
      *해피 데일리 피자 포함 주문 후 피자 수령 완료 이후에 약 1~2시간 이후부터 확인 가능합니다.\n
      혜택 쿠폰 발급 시, 기존에 적립된 스탬프 갯수만큼 차감됩니다.\n
      지급된 쿠폰 혜택은 취소가 불가하며 이점 유의해주시기 바랍니다.\n
      도미노콘 선착순 응모는 SMS 광고성 정보 수신 동의 후 응모 가능합니다.\n`,
    state: "종료",
    date: "2024-04-16",
  },
  {
    title: "5지는 치즈데이. 가정의달은 도미노와 함께!",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1243_eTBAQsir.jpg",
    content: `모든 고객 이용 가능(단, 배달앱 주문 시 혜택 적용 불가)\n
      제휴 및 쿠폰 등 여타 할인과 중복 적용 가능\n
      Best 피자 5종 오리지널 도우 주문 한정 혜택 적용 가능합니다.\n
      모짜렐라 치즈 한정 1.5배 적용됩니다.\n
      일부 특수 매장(대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    state: "진행중",
    date: "2024-04-20",
  },
  {
    title: "SKT 0day 배달/포장 50% 할인",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1231_GhELVIyL.jpg",
    content: `쿠폰 다운로드 기간: 2024년 4월 10일(수), 4월 20일(토), 4월 30일(화) 3일 중 1일\n
      쿠폰 사용 기간: 각 발급일로부터 5일 (4/10~4/14, 4/20~4/24, 4/30~5/4)\n
      쿠폰 다운로드 방법: T멤버십 앱 로그인 > 0 day 이벤트 페이지 > 도미노피자 할인 쿠폰 다운로드\n
      쿠폰 사용 방법: 도미노피자 홈페이지/앱 접속 > 배달/포장 주문 선택 > 배달 주소 등록/포장 매장 선택 > 장바구니에 담기 > 할인 적용 [통신사 및 카드사 제휴 프로모션 선택] > [SKT 0 day 혜택(배달/포장 50%, Silver, Gold, VIP 모두 사용 가능)] 선택 > 쿠폰 번호 입력 > 조회 클릭 > 적용 클릭 > 결제 및 주문 완료\n
      도미노피자 홈페이지/앱 이용 시 오전 10시 이후부터 원활하게 주문하실 수 있습니다.\n
      매장 오픈 시간: 오전 11시~오전 11시 30분(지점별 다름)`,
    state: "진행중",
    date: "2024-04-19",
  },
  {
    title: "행운뽑기 주인공을 찾아라",
    img: "https://cdn.dominos.co.kr/renewal2018/w/event/240405_luckydraw/images/img_01_login.jpg",
    content: `이벤트 기간 : 2024년 4월 5일 ~ 5월 2일\n
      온라인 회원 중 주문 완료한 고객 (웹, 앱)에 한하여 이벤트 기간내 참여 가능\n
      광고성 정보 수신 동의 중 문자메세지 (SMS)와 이메일 (E-mail) 모두 동의시 참여 가능\n
      응모 완료 후 광고성 정보 수신 동의 수정시 도미노콘 수령이 제한될 수 있습니다.\n
      주문취소 등 부적절한 방법으로 혜택을 득한 경우에는 당첨이 취소됩니다.\n
      광고 수신동의 변경은 ‘나의 정보 > 정보수정’ 페이지 하단에서 변경 가능합니다.\n
      도미노콘 (해피 데일리 피자) 당첨자는 2024년 5월 7일 등록된 핸드폰 번호로 도미노콘 일괄 발송됩니다.\n
      사이드디시 무료 쿠폰 (1명), 배달비 무료 쿠폰 (498명)은 당첨시 즉시 지급\n
      사이드디시만 주문시 참여 횟수에 반영되지 않습니다.\n
      일부 특수매장 (대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    state: "진행중",
    date: "2024-04-17",
  },
  {
    title: "해피 데일리 피자 쿠폰 챌린지",
    img: "https://cdn.dominos.co.kr/renewal2018/w/event/240202_hdp/images/1_img_login.jpg",
    content: `이벤트 기간: 2024년 2월 16일 ~ 6월 30일\n
      온라인 회원 대상 이벤트이며 해피 데일리 피자 포함 주문 회원에 한하여 이벤트 참여 가능\n
      *해피 데일리 피자 5종 : 맵퍼로니, 마라 불고기, 소시지 맥스, 클래식 리코타, 맥콘 베이컨\n
      *해피 데일리 피자 포함 주문 후 피자 수령 완료 이후에 약 1~2시간 이후부터 확인 가능합니다.\n
      혜택 쿠폰 발급 시, 기존에 적립된 스탬프 갯수만큼 차감됩니다.\n
      지급된 쿠폰 혜택은 취소가 불가하며 이점 유의해주시기 바랍니다.\n
      도미노콘 선착순 응모는 SMS 광고성 정보 수신 동의 후 응모 가능합니다.\n`,
    state: "종료",
    date: "2024-04-16",
  },
];
