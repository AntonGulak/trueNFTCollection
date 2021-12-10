import express from 'express';
const router = express.Router();

type NftToken = {
    name: string
    limit: number
}

type TokensInfoForm = {
    collectionName: string
    nftTokens: NftToken[]
} 

router.get('/', function(req, res, next) {
    res.render('tokensInfoForm');
});

router.post('/', function(req, res, next) {

    let tokensInfoForm : TokensInfoForm = {
        collectionName: req.body.collectionName,
        nftTokens: []
    }
    if (typeof req.body.tokenName != 'object') {
        tokensInfoForm.nftTokens.push( {
        name: req.body.tokenName,
        limit: req.body.tokenLimit} ) 
    }
    else
    for (let i = 0; i < req.body.tokenName.length; i++) {
            tokensInfoForm.nftTokens.push({
                name: req.body.tokenName[i],
                limit: req.body.tokenLimit[i]
            })    
    }
    delete req.body
    res.render('tokensInfoForm', { title: 'Success' });  
});


export {router as tokensInfoForm};
