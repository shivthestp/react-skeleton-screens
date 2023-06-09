import React from 'react'
import SkeletonElement from './SkeletonElement'

const SkeletonProfile = () => {
    return (
        <div className='skeleton-wrapper'>
            <div className='skeleton-profile'>
                <div><SkeletonElement type='avatar' /></div>

                <div><SkeletonElement type='title' />
                    <SkeletonElement type='text' />
                    <SkeletonElement type='text' />
                    <SkeletonElement type='text' />
                </div>


                {/* <SkeletonElement type='avatar' />
  <SkeletonElement type='thumbnail' /> */}
            </div>
        </div>
    )
}

export default SkeletonProfile