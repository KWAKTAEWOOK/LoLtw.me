import React from "react";

const Topbar = () => {
  return (
    <div>
      <div id="toolbar">
        <div id="toolbar-logo">
          <a href="/">LoLTw.gg</a>
        </div>

        <form id="searchbox" action="/search" method="get">
          <select
            id="searchbox-platform"
            name="platform"
            style="border-bottom-left-radius: 15px;"
          >
            <option value="kr" selected="">
              KR
            </option>
            <option value="br1">BR</option>
            <option value="eun1">EUNE</option>
            <option value="euw1">EUW</option>
            <option value="jp1">JP</option>
            <option value="la1">LAN</option>
            <option value="la2">LAS</option>
            <option value="na1">NA</option>
            <option value="oc1">OCE</option>
            <option value="tr1">TR</option>
            <option value="ru">RU</option>
          </select>

          <input
            id="searchbox-box"
            class="recent-pop"
            type="text"
            name="username"
            placeholder="소환사명을 입력하세요"
            autocomplete="off"
            required="true"
          />

          <button
            id="searchbox-button"
            style="border-bottom-right-radius: 15px;"
          >
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>

          <div id="recent-users" class="recent-pop" style="display: none;">
            <div id="recent-container"></div>
          </div>
        </form>

        <select id="lang-select">
          <option value="ko">한국어</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
};

export default Topbar;
