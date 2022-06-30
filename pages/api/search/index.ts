// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ISearchData } from 'lib/data/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../lib/data/database.json';

interface IApiRequest extends NextApiRequest {
  body: { searchTerm?: string };
}

export type IApiSearchResponseData = ISearchData[];

export default function search(
  req: IApiRequest,
  res: NextApiResponse<IApiSearchResponseData>
) {
  const {
    body: { searchTerm },
  } = req;
  if (req.method === 'POST' && searchTerm && searchTerm.length > 0) {
    const searchPattern = new RegExp(searchTerm, 'i');
    const filteredResults = database.filter((result) => {
      return (
        searchPattern.test(result.title) || searchPattern.test(result.text)
      );
    });
    res.status(200).json(filteredResults);
  } else {
    res.status(400).json([]);
  }
}
