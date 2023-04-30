export interface post {
_id: string;
_createdAt: string;
title: string;
author:{
    name: string;
    image: string;
};
descriptions: string;
mainImage: {
    assets: string;
    url: string;
};
slug: {
    current: string;
};
body:[object ]
}