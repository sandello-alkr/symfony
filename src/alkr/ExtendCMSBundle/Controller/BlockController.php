<?php

namespace alkr\ExtendCMSBundle\Controller;

use alkr\CMSBundle\Controller\BlockController as BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;


class BlockController extends BaseController
{
    /**
     * @Template()
     */
    public function mainMenuAction()
    {
        $em = $this->getDoctrine()->getManager();
        $repo = $em->getRepository('CMSBundle:Page');
        $main = $repo->find(10);
        $pages = $repo->childrenHierarchy($main,true,array('childSort'=>array('field'=>'prior')),false);

        return array('pages'=>$pages,'cut_path'=>$main->getPath());
    }

    /**
     * @Template()
     */
    public function leftMenuAction()
    {
        $em = $this->getDoctrine()->getManager();
        $repo = $em->getRepository('CMSBundle:Page');
        $pages = $repo->getChildren($repo->find(6),true,'prior');

        return array('pages'=>$pages,'repo'=>$repo);
    }
}
