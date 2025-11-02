---
layout: page
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers, VPTeamPageSection } from 'vitepress/theme'
import GeneralMembersList from '../.vitepress/theme/components/GeneralMembersList.vue'

// window.location.replace('../../')
const getDateTime = () => {
  const now = new Date();
  const year = String(now.getFullYear()).slice(2);
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  return `${year}${month}${day}${hour}${minute}`;
};

const members = [
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=2700197512&s=100?t=' + getDateTime(),
    name: '诸子百家，唯我纵横',
    title: '社长',
    desc: '2024年7月加入原提教社，为全社的内容编辑、运营宣传和客服工作作出重要贡献。'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3427651720&s=100?t=' + getDateTime(),
    name: 'WhoTao',
    title: '运营宣传部负责人',
    desc: '2024年7月加入原提教社，曾为社内提供技术支持，主管运营宣传工作'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3398097759&s=100?t=' + getDateTime(),
    name: '叶',
    title: '历史项目组负责人',
    desc: '2024年7月加入原提教社，为全社的项目规划和内容编辑做出贡献'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3979890970&s=100?t=' + getDateTime(),
    name: '黑默',
    title: '星穹讲堂负责人',
    desc: '2024年7月加入原提教社，为全社的项目规划和视频工作做出贡献'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=3827117911&s=100?t='  + getDateTime(),
    name:'时刻想充电的刻猫猫',
    title:'运营宣传部第二负责人',
    desc:'2024年12月加入原提研院，负责全社周边事务的物流运输重要工作'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=3674708245&s=100?t='  + getDateTime(),
    name:'Zhaozhao',
    title:'人事院负责人',
    desc:'2024年7月加入原提教社，曾参与多个项目，现主管全社的人事工作'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=194118037&s=100?t='  + getDateTime(),
    name:'云霏云霏霏',
    title:'人事院第二负责人',
    desc:'2025年1月加入原提研院，为全社的人事工作做出突出贡献'
  }
]
const departmentmembers = [
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=2073291584&s=100?t='  + getDateTime(),
    name:'Calvin·Harris',
    // title:'穹学组负责人',
    desc:'原学组负责人'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=1943093707&s=100?t='  + getDateTime(),
    name:'P·A·I·M·O·N',
    // title:'穹学组负责人',
    desc:'穹学组代负责人'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=544548054&s=100?t='  + getDateTime(),
    name:'藏于星辰梦下',
    // title:'常务理事会办公室主任，运营宣传部副部长',
    desc:'原音组负责人'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=230776565&s=100?t='  + getDateTime(),
    name:'符华',
    // title:'运营宣传部副部长',
    desc:'生物组负责人、试题研究所负责人'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=1047610307&s=100?t='  + getDateTime(),
    name:'期期肆拾玖',
    // title:'人事院主任',
    desc:'原音组第二负责人'
  }
]
// const excellentMembers = [
//   {
//     avatar: 'https://q.qlogo.cn/g?b=qq&nk=2073291584&s=100?t='  + getDateTime(),
//     name: 'Calvin·Harris',
//     title: '《原学》编写组代组长，历史研究院成员',
//     desc: '不求名，不求利，只求奉献。'
//   },
//   {
//     avatar: 'https://q.qlogo.cn/g?b=qq&nk=2807040109&s=100?t='  + getDateTime(),
//     name: '可视化',
//     title: '历史研究院成员',
//     desc: '专注、追求、细节、准确。'
//   },
//   {
//     avatar: 'https://q.qlogo.cn/g?b=qq&nk=3979890970&s=100?t='  + getDateTime(),
//     name: '黑默',
//     title: '星穹讲堂项目组组长，《穹学》编写组成员',
//     desc: '业广惟勤，苦心人，天不负。'
//   },
//   {
//     avatar: 'https://q.qlogo.cn/g?b=qq&nk=1943093707&s=100?t='  + getDateTime(),
//     name: '爱摸鱼的LNGS',
//     title: '《穹学》编写组代组长，星穹讲堂项目组成员',
//     desc:'走好每一步路，做好每一件事。'
//   },
//   {
//     avatar: 'https://q.qlogo.cn/g?b=qq&nk=3398097759&s=100?t='  + getDateTime(),
//     name: '叶',
//     title: '历史研究院代副院长，运营宣传部技术司成员',
//     desc: '奉献自我，为此拼搏。'
//   },
//   {
//     avatar: 'https://q.qlogo.cn/g?b=qq&nk=3539909824&s=100?t='  + getDateTime(),
//     name: 'W.',
//     title: '《穹学》编写组成员',
//     desc: '纯粹、率直。'
//   }
// ]

const honoraryMembers = [
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=209608405&s=100?t='  + getDateTime(),
    name: '林凌（汝可知散兵）',
    title: '第一任社长',
    desc: '2024年6月底创办原提教社，曾领导全社进行多项内容创作，为全社事业做出了不可磨灭的重要贡献，因学业原因及个人意愿，于2024年离开原提教社。'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1165355565&s=100?t='  + getDateTime(),
    name: '暮至长虹',
    title: '第二任社长',
    desc: '2024年7月加入原提教社，后担任第二任社长。对全院的组织架构革新和项目多元发展做出重要贡献，因学业原因及个人意愿，于2025年离开原提研院。'
  },
  {
    avatar: '/pufferfish.png',
    name: '河豚豚',
    title: '原提研院技术总监',
    desc: '2024年8月加入原提研院，负责社内技术相关工作和公文撰写，也是现官网的重要贡献者，他为社内开发多款应用，是不可多得的人才，现因学业原因离开原提研院。'
  },
  {
    avatar: '/yx.png',
    name: '叶欣',
    title: '原设计部负责人',
    desc: '2024年7月加入原提教社，参与社内多个项目，兼职技术顾问，为全社早期的实体周边设计、运营宣传工作和基础设施搭建做出了重要贡献，现因学业原因离开。'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1807229848&s=100?t='  + getDateTime(),
    name: '春秋代序',
    title: '原历史组代负责人',
    desc: '2025年1月加入原提研院，在历史组负责内容编辑工作，是《提瓦特编年史》项目的重要贡献者之一，带领组内成员完成众多作品，现因工作原因退做顾问',
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1424876464&s=100?t='  + getDateTime(),
    name: 'phil616',
    title: '原提教社技术部负责人',
    desc: '为我社的技术工作做出了重大贡献，无偿搭建官方网站，积极听取社员建议，是我社的重要人才。由于其工作与自我的情愿，于2024年离开原提教社。',
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      成员列表
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>常务委员</template>
    <template #lead>常务委员是全社的核心领导层，主持全社大局，领导全社工作。<br><br>以下所展示的是现任的常务委员。</template>
    <template #members>
      <VPTeamMembers size="small" :members="members" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>部门理事</template>
    <template #lead>部门理事是全社指导具体工作的核心力量，是全社工作的中流砥柱。<br><br>以下所展示的是现任的部门理事。</template>
    <template #members>
      <VPTeamMembers size="small" :members="departmentmembers" />
    </template>
  </VPTeamPageSection>

  <!-- <VPTeamPageSection>
    <template #title>优秀研究员</template>
    <template #lead>优秀研究员是遵守纪律、在近期之内积极工作、恪尽职守并为全社做出一定贡献的优秀研究员。他们是研究员里的优秀代表，是勇进取、敢担当的最好诠释。<br><br>本期更新时间：2025年2月5日</template>
    <template #members>
      <VPTeamMembers size="small" :members="excellentMembers" />
    </template>
  </VPTeamPageSection> -->

  <VPTeamPageSection>
    <template #title>其他</template>
    <template #lead>他们曾经为全社做出过重要贡献，虽然如今不再活跃，但依然是我们敬重的伙伴。</template>
    <template #members>
      <VPTeamMembers size="small" :members="honoraryMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>一般研究员</template>
    <template #lead>以下是我们的一般研究员，他们的参与和贡献同样重要，是全社发展的基层力量。</template>
    <template #members>
      <GeneralMembersList />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
