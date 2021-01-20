<?php
    require 'common/common.php';

        try {
            $dbh = connect();
        } catch (PDOException $e) {
            $msg = $e->getMessage();
        }

        // echo $data;

        $sql = 'SELECT * FROM sale_tbl';
        // $sql = 'SELECT sale_no FROM sale_tbl WHERE sale_date>=20210101 AND sale_date<=20211031';
        $stmt = $dbh->prepare($sql);
        $stmt->execute();
        $member = $stmt->fetch();

        $saleNo = $member["sale_no"];
        $saleDate = $member["sale_date"];
        $saleName = $member["sale_name"];
        $saleMoney = $member["sale_money"];
        echo $saleNo;
        // echo $saleDate;
        // echo $saleName;
        // echo $saleMoney;
        
        ?>