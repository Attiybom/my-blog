// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mock } from 'mockjs'

export default function handler(req, res) {
  res.status(200).json({
    name: mock('@cname'),
    age: mock('@integer(10, 100)'),
  })
}
