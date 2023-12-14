import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//데이터 불러오기
import { addons } from './addondata/data';
import { real_addons } from './addondata/realad_data';

//메인 페이지
import Main from './main/main';

//다운로드 페이지
import DownloadMain from './download/main';

//약관
import TermsOfUse from './docs/termsofuse';
import TermsOfShare from './docs/termsofshare';

//폰트
import './font/font_ko.css';
import './font/font_en.css';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/docs/termsofuse' element={<TermsOfUse />} />
        <Route path='/docs/termsofshare' element={<TermsOfShare />} />
        {addons.map((addon) => (
          <Route key={addon.id} path={`/nt_addon/${addon.id}`} element={<DownloadMain />} />
        ))}
        {real_addons.map((addon) => (
          <Route key={addon.id} path={`/real_addon/${addon.id}`} element={<DownloadMain />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
