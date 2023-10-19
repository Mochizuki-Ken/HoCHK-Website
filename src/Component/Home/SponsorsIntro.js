import React,{useState} from 'react'
import './SponsorsIntro.css'
import Text from '../../Tools/Dictionary'
export default function SponsorsIntro() {
    const [sponsors,setSponsors]=useState(
        [
            {title:"EventSponsors" , Sponsors:["https://static.wixstatic.com/media/3d5ea1_1b415845ab6649e4a50a1e7f614d671a~mv2.png/v1/fill/w_410,h_141,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_1b415845ab6649e4a50a1e7f614d671a~mv2.png"]},
            {title:"AwardedBy" , Sponsors:["https://static.wixstatic.com/media/3d5ea1_1e1ff3f83c7a42029e914e23aa2ea798~mv2.gif"]},
            {title:"Collaborators" , Sponsors:["https://static.wixstatic.com/media/3d5ea1_c6271e0a9c224e399869888fed83ab0d.jpg/v1/fill/w_94,h_128,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_c6271e0a9c224e399869888fed83ab0d.jpg","https://static.wixstatic.com/media/3d5ea1_9e7f119194364d928b31537120a2e3c4~mv2.png/v1/fill/w_492,h_124,al_c,lg_1,q_85,enc_auto/3d5ea1_9e7f119194364d928b31537120a2e3c4~mv2.png",
                "https://static.wixstatic.com/media/3d5ea1_7e7e68c86c5c4f4bb5e0b7eaa45010bb~mv2.png/v1/fill/w_392,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_7e7e68c86c5c4f4bb5e0b7eaa45010bb~mv2.png","https://static.wixstatic.com/media/3d5ea1_d4b0a6b6ad414700903e10ff6877bec8~mv2.png/v1/fill/w_322,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/New-HKPC-Logo_Version2-RGB.png",
                "https://static.wixstatic.com/media/3d5ea1_bcb1c0b369ac45eea0f062a859ab4cfe.jpg/v1/fill/w_270,h_185,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_bcb1c0b369ac45eea0f062a859ab4cfe.jpg","https://static.wixstatic.com/media/3d5ea1_7dd0092c2fee4b47a8f518b8a7f3f015~mv2.jpeg/v1/fill/w_524,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202018-07-27%20at%2012_03_51%20PM.jpg",
                "https://static.wixstatic.com/media/3d5ea1_0085428d430046b69e575468c8826167.png/v1/fill/w_302,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_0085428d430046b69e575468c8826167.png"
            ]},
            {title:"Schools" , Sponsors:["https://static.wixstatic.com/media/3d5ea1_872fac6e9b664cbaa60d0fac47050712~mv2_d_1600_1200_s_2.jpg/v1/fill/w_204,h_156,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_872fac6e9b664cbaa60d0fac47050712~mv2_d_1600_1200_s_2.jpg",
                "https://static.wixstatic.com/media/3d5ea1_230cf3a5265646ae9066f04f6d55f992~mv2.png/v1/fill/w_138,h_152,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_230cf3a5265646ae9066f04f6d55f992~mv2.png","https://static.wixstatic.com/media/3d5ea1_0d4eb8ee32f04481a52be7b0fa982664~mv2_d_1464_1466_s_2.jpg/v1/fill/w_142,h_132,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_0d4eb8ee32f04481a52be7b0fa982664~mv2_d_1464_1466_s_2.jpg",
                "https://static.wixstatic.com/media/3d5ea1_94bd9a7017f54239844f52038b83c0fd~mv2.jpg/v1/fill/w_136,h_160,al_c,lg_1,q_80,enc_auto/3d5ea1_94bd9a7017f54239844f52038b83c0fd~mv2.jpg","https://static.wixstatic.com/media/3d5ea1_00c6d0629bb64e6ea24c850cba17b2fc~mv2.jpg/v1/fill/w_136,h_152,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_00c6d0629bb64e6ea24c850cba17b2fc~mv2.jpg",
                "https://static.wixstatic.com/media/3d5ea1_d4fccea084d5420b8a19e5ae9f63050c~mv2.png/v1/fill/w_160,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_d4fccea084d5420b8a19e5ae9f63050c~mv2.png","https://static.wixstatic.com/media/3d5ea1_ce63501efaeb4570b9d5881e0496938f~mv2.jpg/v1/fill/w_158,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_ce63501efaeb4570b9d5881e0496938f~mv2.jpg",
                "https://static.wixstatic.com/media/3d5ea1_ab99d73095de4faeba9f1ff20286c8df~mv2_d_1600_1559_s_2.jpeg/v1/fill/w_172,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_ab99d73095de4faeba9f1ff20286c8df~mv2_d_1600_1559_s_2.jpg","https://static.wixstatic.com/media/3d5ea1_ae78a503ea5a4c689f1f0710f5657380~mv2.jpg/v1/fill/w_188,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_ae78a503ea5a4c689f1f0710f5657380~mv2.jpg",
                "https://static.wixstatic.com/media/3d5ea1_db8c2e672e834cdd9b32b8bca55df14b~mv2_d_1972_2012_s_2.png/v1/fill/w_192,h_192,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_db8c2e672e834cdd9b32b8bca55df14b~mv2_d_1972_2012_s_2.png","https://static.wixstatic.com/media/3d5ea1_57eaa9367c954c7dbb68ea165bae9c19~mv2_d_2362_2362_s_2.png/v1/fill/w_204,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_57eaa9367c954c7dbb68ea165bae9c19~mv2_d_2362_2362_s_2.png",
                "https://static.wixstatic.com/media/3d5ea1_d79645aad12e474ba0e12af145eaa12c~mv2_d_3933_4875_s_4_2.png/v1/fill/w_136,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_d79645aad12e474ba0e12af145eaa12c~mv2_d_3933_4875_s_4_2.png","https://static.wixstatic.com/media/3d5ea1_37af447d6fb4465ea3de3851eb9144ca~mv2_d_2170_2644_s_2.jpg/v1/fill/w_136,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_37af447d6fb4465ea3de3851eb9144ca~mv2_d_2170_2644_s_2.jpg",
                "https://static.wixstatic.com/media/3d5ea1_59d5c0f0baae4238a098022606eb9d58~mv2.jpg/v1/fill/w_198,h_196,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_59d5c0f0baae4238a098022606eb9d58~mv2.jpg","https://static.wixstatic.com/media/3d5ea1_27d44a7af4984884aa006095ed89303f~mv2.png/v1/fill/w_156,h_188,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_27d44a7af4984884aa006095ed89303f~mv2.png",
                "https://static.wixstatic.com/media/3d5ea1_8d9dde249e4c48e2ac13b248a1be8cb4~mv2.jpeg/v1/fill/w_168,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/logo.jpg","https://static.wixstatic.com/media/3d5ea1_68704ab22c384f9d86755604efd9b848~mv2.png/v1/fill/w_206,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_PNG.png","https://static.wixstatic.com/media/3d5ea1_544f100bcef6406fbe0664a7b8539baa~mv2.jpeg/v1/fill/w_220,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202019-05-02%20at%2011_51_50%20AM.jpg",
                "https://static.wixstatic.com/media/3d5ea1_eb51d15c82a54be086074cbaf8b94551~mv2.jpeg/v1/fill/w_184,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202020-01-21%20at%202_17_28%20PM_.jpg","https://static.wixstatic.com/media/3d5ea1_36d0fd58a4104a5b81b111e4ca526cc4~mv2.png/v1/crop/x_27,y_18,w_820,h_886/fill/w_184,h_196,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202020-02-03%20at%208_20_43%20PM.png"
            ]},
            {title:"Venue" , Sponsors:["https://static.wixstatic.com/media/3d5ea1_985cb2a43b944af581de96c2d975e4dd.jpg/v1/fill/w_392,h_199,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_985cb2a43b944af581de96c2d975e4dd.jpg",
                "https://static.wixstatic.com/media/3d5ea1_c25e52f320844ce7822de841096b581a~mv2.jpg/v1/fill/w_268,h_108,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_c25e52f320844ce7822de841096b581a~mv2.jpg","https://static.wixstatic.com/media/3d5ea1_a8f01c1c776d473c9a86637aeffe0436.jpg/v1/fill/w_220,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_a8f01c1c776d473c9a86637aeffe0436.jpg",
                "https://static.wixstatic.com/media/3d5ea1_59cf31b80a58464cbfd4018dc285ad9d.jpg/v1/fill/w_142,h_184,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_59cf31b80a58464cbfd4018dc285ad9d.jpg","https://static.wixstatic.com/media/3d5ea1_8e96ab1c24cf47a0987e90cab05ac2d0.png/v1/fill/w_332,h_186,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_8e96ab1c24cf47a0987e90cab05ac2d0.png"
            ]},
            {title:"Equipment" , Sponsors:["https://static.wixstatic.com/media/3d5ea1_16431bcec651460d9707093e16c915a9~mv2.png/v1/fill/w_316,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_16431bcec651460d9707093e16c915a9~mv2.png",
                "https://static.wixstatic.com/media/3d5ea1_384e6d9ac06c49d59728dd7cd3621635~mv2.jpg/v1/fill/w_346,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_384e6d9ac06c49d59728dd7cd3621635~mv2.jpg","https://static.wixstatic.com/media/3d5ea1_1a73bfd0eac04577abeac36a762b1893~mv2.png/v1/fill/w_206,h_112,al_c,lg_1,q_85,enc_auto/3d5ea1_1a73bfd0eac04577abeac36a762b1893~mv2.png",
                "https://static.wixstatic.com/media/3d5ea1_0a9808ca815c4fe0aa8e12a9ffcbb2ba~mv2.png/v1/fill/w_318,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_0a9808ca815c4fe0aa8e12a9ffcbb2ba~mv2.png","https://static.wixstatic.com/media/3d5ea1_970e36f415a84091bfcfde68c7f8e606~mv2.png/v1/fill/w_392,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_970e36f415a84091bfcfde68c7f8e606~mv2.png",
                "https://static.wixstatic.com/media/3d5ea1_42fc2f18bfa9412289d565da237d2e52.png/v1/fill/w_256,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_42fc2f18bfa9412289d565da237d2e52.png","https://static.wixstatic.com/media/3d5ea1_82497c44784f48d194dc67f4dc7338bc~mv2.png/v1/fill/w_288,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_82497c44784f48d194dc67f4dc7338bc~mv2.png",
                "https://static.wixstatic.com/media/3d5ea1_fc634b124eb744ea8080e66813bdfe66.jpg/v1/fill/w_248,h_138,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_fc634b124eb744ea8080e66813bdfe66.jpg","https://static.wixstatic.com/media/3d5ea1_051c9370c73a49479e7e0de74f79e960.jpg/v1/fill/w_368,h_136,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_051c9370c73a49479e7e0de74f79e960.jpg",
                "https://static.wixstatic.com/media/3d5ea1_7da90ed525d14e95a627c874ca5deb16.jpg/v1/fill/w_268,h_134,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_7da90ed525d14e95a627c874ca5deb16.jpg","https://static.wixstatic.com/media/3d5ea1_6ef8ed310e634402bede7965b37b1977~mv2.png/v1/fill/w_226,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_6ef8ed310e634402bede7965b37b1977~mv2.png",
                "https://static.wixstatic.com/media/3d5ea1_2791f046fe984e94b7d434a09a06d0f3~mv2_d_2273_1237_s_2.png/v1/fill/w_250,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_2791f046fe984e94b7d434a09a06d0f3~mv2_d_2273_1237_s_2.png","https://static.wixstatic.com/media/3d5ea1_d7c7875b97ee4aaf801c3f5762779538~mv2.png/v1/fill/w_236,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_d7c7875b97ee4aaf801c3f5762779538~mv2.png",
                "https://static.wixstatic.com/media/3d5ea1_6dbd0e39d2db4193a0e020556aa9c44c~mv2.jpg/v1/fill/w_264,h_134,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_6dbd0e39d2db4193a0e020556aa9c44c~mv2.jpg","https://static.wixstatic.com/media/3d5ea1_e545f87d8b2f4e178034cdbd72dbccf8~mv2.jpg/v1/fill/w_252,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_e545f87d8b2f4e178034cdbd72dbccf8~mv2.jpg",
                "https://static.wixstatic.com/media/3d5ea1_017d3347f77c4ff8817fa08979233ec3~mv2.jpg/v1/fill/w_410,h_148,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_017d3347f77c4ff8817fa08979233ec3~mv2.jpg","https://static.wixstatic.com/media/3d5ea1_a47bbe3879a94378acca6d285a4da351~mv2.jpeg/v1/fill/w_764,h_126,al_c,lg_1,q_80,enc_auto/WhatsApp%20Image%202018-11-15%20at%201_04_17%20PM_.jpg",'https://static.wixstatic.com/media/3d5ea1_c31946ff7d3747188f16017f6f3efe4d~mv2_d_2084_2081_s_2.jpg/v1/fill/w_248,h_244,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Tublock%20logo_%202019.jpg'
                ,"https://static.wixstatic.com/media/3d5ea1_cd6612f99fd443fcb2fde1431a8079bd~mv2.jpg/v1/fill/w_740,h_248,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PristerLogo%5B1%5D.jpg"

            ]},
            {title:"Media" , Sponsors:["https://static.wixstatic.com/media/3d5ea1_a4598ff31c234b8ba5e361b485f2b7c6~mv2.png/v1/fill/w_292,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_a4598ff31c234b8ba5e361b485f2b7c6~mv2.png"]},
            {title:"SupportedBy" , Sponsors:["https://static.wixstatic.com/media/3d5ea1_cc1754674a414a23929545e184d78d2c.png/v1/fill/w_310,h_104,al_c,lg_1,q_85,enc_auto/3d5ea1_cc1754674a414a23929545e184d78d2c.png","https://static.wixstatic.com/media/3d5ea1_dcb100bec81f4a818228ba01ea2e2a67.png/v1/fill/w_312,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d5ea1_dcb100bec81f4a818228ba01ea2e2a67.png",
                "https://static.wixstatic.com/media/3d5ea1_0d2c99b7c43a4233a484ba295683dace~mv2.jpg/v1/fill/w_268,h_128,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_0d2c99b7c43a4233a484ba295683dace~mv2.jpg","https://static.wixstatic.com/media/3d5ea1_3ee2035bac8042e389f3eb656bc76b10.jpg/v1/fill/w_232,h_109,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_3ee2035bac8042e389f3eb656bc76b10.jpg",
                "https://static.wixstatic.com/media/3d5ea1_765c67cd7c54429fa842f58a2afc58b3.jpg/v1/fill/w_252,h_104,al_c,lg_1,q_80,enc_auto/3d5ea1_765c67cd7c54429fa842f58a2afc58b3.jpg","https://static.wixstatic.com/media/3d5ea1_4ba0850a3d7a4c27961316270028e1cc~mv2.jpg/v1/fill/w_124,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_4ba0850a3d7a4c27961316270028e1cc~mv2.jpg",
                "https://static.wixstatic.com/media/3d5ea1_2fbc91e5c4394f3b8021e59a715a1a69.png/v1/fill/w_218,h_88,al_c,lg_1,q_85,enc_auto/3d5ea1_2fbc91e5c4394f3b8021e59a715a1a69.png","https://static.wixstatic.com/media/3d5ea1_e0407f3eca5541fc85bb0f850303885c.jpg/v1/fill/w_186,h_136,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_e0407f3eca5541fc85bb0f850303885c.jpg",
                "https://static.wixstatic.com/media/3d5ea1_d75c942d7ad340078c3fb700deb57163~mv2.png/v1/fill/w_254,h_124,al_c,lg_1,q_85,enc_auto/3d5ea1_d75c942d7ad340078c3fb700deb57163~mv2.png","https://static.wixstatic.com/media/3d5ea1_09b6f7458fd849bd9fca375e5d3a7f06.jpg/v1/fill/w_185,h_91,al_c,lg_1,q_80,enc_auto/3d5ea1_09b6f7458fd849bd9fca375e5d3a7f06.jpg",
                "https://static.wixstatic.com/media/3d5ea1_7cb3cf0d9d7b40fdbefac0969c8bb814~mv2.jpeg/v1/fill/w_940,h_96,al_c,lg_1,q_80,enc_auto/3d5ea1_7cb3cf0d9d7b40fdbefac0969c8bb814~mv2.jpg","https://static.wixstatic.com/media/3d5ea1_4d74a09f32074cb191ff6538d94d2462.png/v1/fill/w_268,h_116,al_c,lg_1,q_85,enc_auto/3d5ea1_4d74a09f32074cb191ff6538d94d2462.png",
                "https://static.wixstatic.com/media/3d5ea1_8edd9528d12a44648ed8724c0485de0a~mv2.jpeg/v1/fill/w_490,h_92,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_8edd9528d12a44648ed8724c0485de0a~mv2.jpg","https://static.wixstatic.com/media/3d5ea1_975fa3616d4446eeac825d2e5ac75551.jpg/v1/fill/w_124,h_124,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_975fa3616d4446eeac825d2e5ac75551.jpg",
                "https://static.wixstatic.com/media/3d5ea1_bb617f546c0548b3828f710877b0bf94~mv2.jpg/v1/fill/w_136,h_132,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_bb617f546c0548b3828f710877b0bf94~mv2.jpg","https://static.wixstatic.com/media/3d5ea1_2a316f7e3a3745a38f3eb2dca2a63fee~mv2.jpeg/v1/fill/w_520,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_2a316f7e3a3745a38f3eb2dca2a63fee~mv2.jpg",
                "https://static.wixstatic.com/media/3d5ea1_c25361a0e8bf493f8df154817f32a884.jpg/v1/fill/w_678,h_91,al_c,lg_1,q_80,enc_auto/3d5ea1_c25361a0e8bf493f8df154817f32a884.jpg",
                "https://firebasestorage.googleapis.com/v0/b/hochk-hk.appspot.com/o/AI Lab Logo 10.10.2023.png?alt=media&token=de447547-07a2-4eea-a53c-e0261ef46aff"

            ]},
        ]
    )
  return (
    <div className="SponsorsIntro_Main_Div">
        <label className='Title'>{Text("Sponsors")}</label>
        <div className="Sponsors_div">
            {
                sponsors.map((e)=>{
                    return(
                        <div className="Sponsor_outline_div">
                            <label className="sponsor_title">{Text(e.title)}</label>
                            <div className="Sponsor_div">
                                {
                                    e.Sponsors.map((i)=>{
                                        return(<img src={i}></img>)
                                    })
                                }                                
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}
