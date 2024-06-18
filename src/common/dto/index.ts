import { IsDateString, IsNumberString, IsObject, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
/**
 * 时间区间对象
 */
export class DateParamsDTO {
    @IsDateString()
    beginTime: string;
  
    @IsDateString()
    endTime: string;
  }
export class PagingDto {
    @ApiProperty()
    @IsNumberString()
    pageNum: number;
  
    @ApiProperty()
    @IsNumberString()
    pageSize: number;
  
    /**
     * 时间区间
     */
    @ApiProperty({ required: false })
    @IsOptional()
    @IsObject()
    params?: DateParamsDTO;
  
    /**
     * 排序字段
     */
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    orderByColumn?: string;
  
    /**
     * 排序规则
     */
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    isAsc?: 'ascending' | 'descending';
  }
  