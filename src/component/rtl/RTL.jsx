import React from 'react';
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from 'stylis'


const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
});

const RTL = ({ children }) => {

    return (
        <CacheProvider value={cacheRtl}>
            <div style={{width:"100%"}} dir="rtl">
                {children}
            </div>
        </CacheProvider>
    );
};

export default RTL;